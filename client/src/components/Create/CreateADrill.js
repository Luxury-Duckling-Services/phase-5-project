import { Dialog , DialogTitle , Slide } from '@mui/material';
import { useState , forwardRef } from "react";
import CreateADrillStepOne from './CreateADrillStepOne';
import CreateADrillStepTwo from './CreateADrillStepTwo';
import CreateADrillStepThree from './CreateADrillStepThree';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateADrill( { usersId , activeStep , setActiveStep , open , handleCloseCreate} ) {
    const [ drillBeingCreated , setDrillBeingCreated ] = useState({})

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={()=>{
                handleCloseCreate('createADrillOpen')
            }}
        >
            <DialogTitle>Create A Drill</DialogTitle>

            {activeStep.createADrill===0?
                <CreateADrillStepOne usersId={usersId} activeStep={activeStep} setActiveStep={setActiveStep} setDrillBeingCreated={setDrillBeingCreated} />
            :<></>}

            {activeStep.createADrill===1?
                <CreateADrillStepTwo activeStep={activeStep} setActiveStep={setActiveStep} drillBeingCreated={drillBeingCreated} setDrillBeingCreated={setDrillBeingCreated} />
            :<></>}

            {activeStep.createADrill===2?
                <CreateADrillStepThree usersId={usersId} activeStep={activeStep} setActiveStep={setActiveStep} drillBeingCreated={drillBeingCreated} />
            :<></>}
            
        </Dialog>
    )
}

export default CreateADrill