import { Box, Button , TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect , useState } from "react";
import * as Yup from 'yup';
import { DialogActions , DialogContent } from '@mui/material';
import { Stepper , Step , StepLabel , Select , MenuItem , InputLabel , FormControl , Avatar , CardHeader }  from '@mui/material';

const validationSchema = Yup.object({
    drill_title: Yup
        .string('Enter a title for the drill.')
        .min(3, 'Must be between 3 to 20 characters.')
        .max(20, 'Must be between 3 to 20 characters.')
        .required('Required'),
    instruction: Yup
        .string('Enter detailed instruction for the drill.')
        .min(5, 'Must be between 5 to 100 characters.')
        .max(100, 'Must be between 5 to 100 characters.')
        .required('Required'),
});

function CreateADrillStepOne( { activeStep , setActiveStep } ) {
    const [sports , setSports] = useState([])

    useEffect( ()=> {
        fetch("/sports_categories")
        .then( (r) =>r.json())
        .then( (j) =>{
            setSports(j)
        })
    } , [])

    const formik = useFormik({
        initialValues: {
            drill_title: "",
            instruction: "",
            sports_category_id: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setActiveStep({...activeStep , createADrill: 1})
            console.log(values)
        }
    });

    return (
        <DialogContent>
            <Stepper
                connector={null}
                activeStep={activeStep.createADrill}
                orientation="vertical"
                sx={{mb:2}}
            >
                <Step>
                    <StepLabel>Title and instruction for the drill</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Upload a video for the drill</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Post to the community feed</StepLabel>
                </Step>
                    
            </Stepper>

            <form onSubmit={formik.handleSubmit}>
                <Box>
                    <FormControl fullWidth sx={{mb:2}}>
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
                    </FormControl>


                    <TextField
                        id="drill_title"
                        label="Drill Title"
                        placeholder="Enter a title for the drill..."
                        value={formik.values.drill_title}
                        fullWidth
                        onChange={formik.handleChange}
                        sx={{mb:2}}
                        error={formik.touched.drill_title && Boolean(formik.errors.drill_title)}
                        helperText={formik.touched.drill_title && formik.errors.drill_title}
                    />

                    <TextField
                        multiline
                        id="instruction"
                        label="Instruction"
                        placeholder="Enter detailed instruction for the drill..."
                        value={formik.values.instruction}
                        fullWidth
                        onChange={formik.handleChange}
                        sx={{mb:2}}
                        error={formik.touched.instruction && Boolean(formik.errors.instruction)}
                        helperText={formik.touched.instruction && formik.errors.instruction}
                    />
   
                    <DialogActions>
                        <Button type="submit">
                            Create this drill & next
                        </Button>
                    </DialogActions>
                </Box>
            </form>
        </DialogContent>
    )
}

export default CreateADrillStepOne