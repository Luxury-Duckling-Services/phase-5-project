import { Box, Button , CardMedia , Grid, Typography , DialogActions , DialogContent , Stepper , Step , StepLabel } from '@mui/material';

function CreateADrillStepTwo( { activeStep , setActiveStep , drillBeingCreated , setDrillBeingCreated } ) {

    const handleUploadVideo = (e) => {
        let formData = new FormData()
        formData.append('video_data' , e.target.files[0])

        // console.log(drillBeingCreated)

        fetch(`/drills/${drillBeingCreated.id}`, {
            method: "PATCH",
            body: formData
        })
        .then(r=> r.json())
        .then( (j) => {
            setDrillBeingCreated(j)
        })
    }

    const handleUseThisVideoAndNext = () => {
        setActiveStep({...activeStep , createADrill: 2})
    }

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
                {drillBeingCreated.video_data ?
                    <CardMedia
                        component="video"    
                        controls 
                        src={drillBeingCreated.video_data}/>
                    :
                    <Typography variant="body2">Video preview will show up once uploaded.</Typography>
                }
                    
                <Grid container sx={{mt: 1}} align="center">
                    <Grid item xs={12}>
                        <Button variant="outlined" sx={{fontSize: 8}} component="label">
                            {drillBeingCreated.video_data ? "Re-upload Video" : "Upload Video"}      
                            <input
                                hidden
                                accept="video/*"
                                type="file"
                                onChange={(e) => {
                                    handleUploadVideo(e)
                                }}
                            />
                        </Button>
                    </Grid>
                </Grid>
   
                <DialogActions>
                    <Button onClick={handleUseThisVideoAndNext} disabled={!drillBeingCreated.video_data}>
                        Use this video & next
                    </Button>
                </DialogActions>
            </Box>

        </DialogContent>
    )
}

export default CreateADrillStepTwo