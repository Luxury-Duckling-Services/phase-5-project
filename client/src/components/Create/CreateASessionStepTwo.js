import { Button , Grid , DialogActions , DialogContent , Stepper , Step , StepLabel } from '@mui/material';

import { useEffect, useState } from "react";

import CreateASessionStepTwoDrillCard from './CreateASessionStepTwoDrillCard';
import CreateASessionStepTwoSearchBar from './CreateASessionStepTwoSearchBar';

function CreateASessionStepTwo( { activeStep , setActiveStep , sessionBeingCreated , setSessionBeingCreated } ) {

    const [ oneDrillCardBeingEdited , setOneDrillCardBeingEdited ] = useState(false)

    const [ drillsToBeAddedToTheSession , setDrillsToBeAddedToTheSession ] = useState( [] )

    const handleAddTheseDrillsAndNext = () => {
        // setActiveStep({...activeStep , createASession: 2})
        console.log( drillsToBeAddedToTheSession )
    }
    
    const insertOneDrillToTheBottom = ( drill ) => {
        setDrillsToBeAddedToTheSession( [ ...drillsToBeAddedToTheSession , drill ])
    }

    return (
        <DialogContent>
            <Stepper
                connector={null}
                activeStep={activeStep.createASession}
                orientation="vertical"
                sx={{mb:2}}
            >
                <Step>
                    <StepLabel>Title and description for the session</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Add drills to the session</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Post to the community feed</StepLabel>
                </Step>
                    
            </Stepper>

            {drillsToBeAddedToTheSession.map( (drill , index) => {
                    return <CreateASessionStepTwoDrillCard drill={drill} session={sessionBeingCreated} index={index}/>
                })
            }

            <CreateASessionStepTwoSearchBar insertOneDrillToTheBottom={insertOneDrillToTheBottom}/>

            <DialogActions>
                <Button onClick={handleAddTheseDrillsAndNext} disabled={ oneDrillCardBeingEdited || drillsToBeAddedToTheSession.length ===0 }>
                    Finish editing & next
                </Button>
            </DialogActions>

        </DialogContent>
    )
}

export default CreateASessionStepTwo