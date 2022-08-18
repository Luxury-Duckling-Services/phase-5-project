import { Stepper , Step , StepLabel }  from '@mui/material';
import { useState } from 'react'
import SignupStepOne from "./SignupStepOne";
import SignupStepTwo from "./SignupStepTwo";

function SignupForm({ setUsersId }) {
    const [activeStep , setActiveStep] = useState(0);
    const [ newUser , setNewUser ] = useState(null);
    
    return (
        <>
            <Stepper
                connector={null}
                activeStep={activeStep}
                orientation="vertical"
                sx={{mb:2}}
            >
                <Step>
                    <StepLabel>Set up account</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Select your sports</StepLabel>
                </Step>
                
            </Stepper>

            {activeStep===0? <SignupStepOne setActiveStep={setActiveStep} setNewUser={setNewUser} /> : <></>} 
            {activeStep===1? <SignupStepTwo setUsersId={setUsersId} newUser={newUser}/> : <></>}
        </>
    )
}

export default SignupForm;