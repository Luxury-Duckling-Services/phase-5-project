import { Box, Button , CardMedia , Grid } from '@mui/material';
import { DialogActions , DialogContent } from '@mui/material';
import { Stepper , Step , StepLabel }  from '@mui/material';

function CreateADrillStepTwo( { activeStep , setActiveStep } ) {

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

            <Box>
                <CardMedia
                    component="video"    
                    controls 
                    src="./myfile.mp4"/>
                    
                <Grid container sx={{mt: 1}} align="center">
                    <Grid item xs={12}>
                        <Button variant="outlined" sx={{fontSize: 8}} component="label">
                            Upload Video        
                            <input
                                hidden
                                accept="video/*"
                                type="file"
                                onChange={(e) => {
                                        
                                }}
                            />
                        </Button>
                    </Grid>
                </Grid>
   
                <DialogActions>
                    <Button>
                        Use this video & next
                    </Button>
                </DialogActions>
            </Box>

        </DialogContent>
    )
}

export default CreateADrillStepTwo