import { Box, Button , TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DialogActions , DialogContent } from '@mui/material';
import { Stepper , Step , StepLabel }  from '@mui/material';

const validationSchema = Yup.object({
    drill_title: Yup
        .string('Enter a title for the drill.')
        .min(4, 'Must be between 4 to 20 characters.')
        .max(20, 'Must be between 4 to 20 characters.')
        .required('Required'),
    instruction: Yup
        .string('Enter detailed instruction for the drill.')
        .min(10, 'Must be between 10 to 200 characters.')
        .max(200, 'Must be between 10 to 200 characters.')
        .required('Required'),
});

function CreateADrillStepOne( { activeStep , setActiveStep } ) {
    
    const formik = useFormik({
        initialValues: {
            drill_title: "",
            instruction: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <DialogContent>
            <Stepper
                connector={null}
                activeStep={activeStep}
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