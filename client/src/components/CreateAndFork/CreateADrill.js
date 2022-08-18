import { Button , Dialog , DialogActions , DialogContent , DialogContentText , DialogTitle , Slide } from '@mui/material';
import { useState , forwardRef } from "react";
import { Stepper , Step , StepLabel }  from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateADrill( {open , handleCloseCreate} ) {
    const [activeStep , setActiveStep] = useState(0);

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={()=>{
                handleCloseCreate('createADrillOpen')
            }}
        >
            <DialogTitle>Creat A Drill</DialogTitle>
            
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

                <DialogContentText>
                    
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>
                {activeStep===0?
                    <Button onClick={()=>{
                        setActiveStep(1)
                    }}>Create this drill & next</Button> : <></>}

                {activeStep===1? 
                    <Button onClick={()=>{
                        setActiveStep(2)
                    }}>Finish uploading & next</Button>
                    : <></>}  
                
                {activeStep===2? 
                    <Button onClick={()=>{
                        handleCloseCreate('createADrillOpen')
                        setActiveStep(0)
                    }}>Post</Button>
                    : <></>}
            </DialogActions>
        </Dialog>
    )
}

export default CreateADrill