import { Dialog , DialogTitle , Slide } from '@mui/material';
import { useState , forwardRef } from "react";
import CreateASessionStepOne from './CreateASessionStepOne';
import CreateASessionStepTwo from './CreateASessionStepTwo';
import CreateASessionStepThree from './CreateASessionStepThree';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateASession( { usersId , activeStep , setActiveStep , open , handleCloseCreate } ) {
    const [ sessionBeingCreated , setSessionBeingCreated ] = useState({})

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={()=>{
                handleCloseCreate('createASessionOpen')
            }}
        >
            <DialogTitle>Create A Workout Session</DialogTitle>
            
            {activeStep.createASession===0? 
                <CreateASessionStepOne usersId={usersId} activeStep={activeStep} setActiveStep={setActiveStep} setSessionBeingCreated={setSessionBeingCreated} />
            :<></> }

            {activeStep.createASession===1? 
                <CreateASessionStepTwo activeStep={activeStep} setActiveStep={setActiveStep} sessionBeingCreated={sessionBeingCreated} setSessionBeingCreated={setSessionBeingCreated} />
            :<></> }

            {activeStep.createASession===2? 
                <CreateASessionStepThree usersId={usersId} activeStep={activeStep} setActiveStep={setActiveStep} sessionBeingCreated={sessionBeingCreated} handleCloseCreate={handleCloseCreate}/>
            :<></> }

        </Dialog>
    )
}

export default CreateASession