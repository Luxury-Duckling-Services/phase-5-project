import { Dialog , DialogTitle , Slide } from '@mui/material';
import { forwardRef } from "react";
import CreateADrillStepOne from './CreateADrillStepOne';
import CreateADrillStepTwo from './CreateADrillStepTwo';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateADrill( {activeStep , setActiveStep , open , handleCloseCreate} ) {

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

            {activeStep.createADrill===0?
                <CreateADrillStepOne activeStep={activeStep} setActiveStep={setActiveStep}/>
            :<></>}

            {activeStep.createADrill===1?
                <CreateADrillStepTwo activeStep={activeStep} setActiveStep={setActiveStep}/>
            :<></>}
            
        </Dialog>
    )
}

export default CreateADrill