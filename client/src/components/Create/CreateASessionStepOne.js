import { Box, Button , TextField , FormHelperText , DialogActions , DialogContent , Stepper , Step , StepLabel , Select , MenuItem , InputLabel , FormControl , Avatar , CardHeader } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect , useState } from "react";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    workout_session_title: Yup
        .string('Enter a title for the workout session.')
        .min(3, 'Must be between 3 to 20 characters.')
        .max(40, 'Must be between 3 to 40 characters.')
        .required('Required'),
    description: Yup
        .string('Enter detailed description for the workout session.')
        .min(5, 'Must be between 5 to 100 characters.')
        .max(100, 'Must be between 5 to 100 characters.')
        .required('Required'),
});

function CreateASessionStepOne( { usersId , activeStep , setActiveStep , setSessionBeingCreated } ) {
    const [sports , setSports] = useState([])
    const [errors , setErrors] = useState(null)

    useEffect( ()=> {
        fetch("/sports_categories")
        .then( (r) =>r.json())
        .then( (j) =>{
            setSports(j)
        })
    } , [])

    const formik = useFormik({
        initialValues: {
            workout_session_title: "",
            description: "",
            sports_category_id: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            fetch("/workout_sessions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( {...values , user_id: usersId.userId } ),
            })
            .then((r)=>{
                if (r.ok) {
                    r.json()
                    .then((j)=> {
                        setSessionBeingCreated( j )
                        setActiveStep({...activeStep , createASession: 1})
                    })
                } else {
                    r.json()
                    .then((err)=>{
                        setErrors(err.errors)
                    })
                }
            })
        }
    });

    return (
        <DialogContent>
            <Stepper
                connector={null}
                activeStep={activeStep.createASession}
                orientation="vertical"
                sx={{mb:2}}
            >
                <Step>
                    <StepLabel>Title and description for the session</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Add drills to the session</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Post to the community feed</StepLabel>
                </Step>

            </Stepper>

            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <FormControl fullWidth sx={{mb:2}} error={errors}>
                        <InputLabel >Sports Category</InputLabel>
                        
                        <Select
                            id="sports_category_id"
                            name="sports_category_id"
                            label="Sports Category"
                            value={formik.values.sports_category_id}
                            onChange={formik.handleChange}
                            style={{ display: "flex" }}
                        >
                            {sports.map( (sport)=> {
                                return (
                                    <MenuItem value={sport.id} key={sport.id}>
                                        <CardHeader sx={{height:2}}
                                            titleTypographyProps={{
                                                fontSize: 15,
                                            }}
                                            avatar={<Avatar key={sport.id} sx={{width: 27, height: 27}} src={sport.sport_image}/>}
                                            title={sport.sport_name}
                                        />
                                    </MenuItem>
                                ) } ) }
                        </Select>
                        {errors ? <FormHelperText>Select one category.</FormHelperText> : <></>}
                    </FormControl>

                    <TextField
                        id="workout_session_title"
                        label="Workout Session Title"
                        placeholder="Enter a title for the workout session..."
                        value={formik.values.workout_session_title}
                        fullWidth
                        onChange={formik.handleChange}
                        sx={{mb:2}}
                        error={formik.touched.workout_session_title && Boolean(formik.errors.workout_session_title)}
                        helperText={formik.touched.workout_session_title && formik.errors.workout_session_title}
                    />

                    <TextField
                        multiline
                        id="description"
                        label="Description"
                        placeholder="Enter detailed description for the workout session..."
                        value={formik.values.description}
                        fullWidth
                        onChange={formik.handleChange}
                        sx={{mb:2}}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
   
                    <DialogActions>
                        <Button type="submit">
                            Create this session & next
                        </Button>
                    </DialogActions>
                </Box>
            </form>
        </DialogContent>
    )
}

export default CreateASessionStepOne