import { Box, Button , TextField , DialogActions , DialogContent , Stepper , Step , StepLabel } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PostCard from '../Feed/PostCard';
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
    post_subtitle: Yup
        .string('Enter a subtitle.')
        .min(5, 'Must be between 5 to 50 characters.')
        .max(50, 'Must be between 5 to 50 characters.')
        .required('Required')
});

function CreateADrillStepThree( { usersId , activeStep , setActiveStep , drillBeingCreated , handleCloseCreate } ) {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            post_subtitle: "Check out my new drill!"
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            fetch("/posts",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...values ,
                    user_id: usersId.userId,
                    drill_id: drillBeingCreated.id,
                    sports_category_id: drillBeingCreated.sports_category.id
                })
            })
            .then(r=>r.json())
            .then(j=>{
                handleCloseCreate('createADrillOpen')
                setActiveStep({ ...activeStep , createADrill: null})
                navigate("../feed", { replace: true });
            })
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
                    <TextField
                        multiline
                        id="post_subtitle"
                        label="Post Subtitle"
                        placeholder="Enter a subtitle for your new post..."
                        value={formik.values.post_subtitle}
                        fullWidth
                        onChange={formik.handleChange}
                        sx={{mb:2}}
                        error={formik.touched.post_subtitle && Boolean(formik.errors.post_subtitle)}
                        helperText={formik.touched.post_subtitle && formik.errors.post_subtitle}
                    />
   
                    <DialogActions>
                        <Button type="submit">
                            Create this post
                        </Button>
                    </DialogActions>
                </Box>
            </form>
        </DialogContent>
    )
}

export default CreateADrillStepThree