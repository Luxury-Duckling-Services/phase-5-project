import { Button , Grid , DialogActions , DialogContent , Stepper , Step , StepLabel } from '@mui/material';

import { useEffect, useState } from "react";

import DrillCard from '../Workout/DrillCard';
import CreateASessionStepTwoSearchBar from './CreateASessionStepTwoSearchBar';

function CreateASessionStepTwo( { activeStep , setActiveStep , sessionBeingCreated , setSessionBeingCreated } ) {

    //

    const [ sampleDrill , setSampleDrill ] = useState( {} )

    useEffect(() => {
        fetch('/drills')
        .then(r=>r.json())
        .then(j=>{
            setSampleDrill(j[0])
        })
    } , [])

    //

    const [ drillsToBeAddedToTheSession , setDrillsToBeAddedToTheSession ] = useState( [] )

    const handleAddTheseDrillsAndNext = () => {
        // setActiveStep({...activeStep , createASession: 2})
        console.log( drillsToBeAddedToTheSession )
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
                    <DrillCard inCreateASession={true} drill={sampleDrill} session={sessionBeingCreated} index={index}/>
                })
            }

            <CreateASessionStepTwoSearchBar/>

            <DialogActions>
                <Button onClick={handleAddTheseDrillsAndNext}>
                    Confirm Session & next
                </Button>
            </DialogActions>

        </DialogContent>
    )
}

export default CreateASessionStepTwo