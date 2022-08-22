import { Box, Button , CardMedia , Grid, Typography , DialogActions , DialogContent , Stepper , Step , StepLabel } from '@mui/material';
import DrillCard from '../Workout/DrillCard';
import { useEffect, useState } from "react";

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

    const [ drillsToBeAddedToTheSession , setDrillsToBeAddedToTheSession ] = useState([])

    const handleAddTheseDrillsAndNext = () => {
        setActiveStep({...activeStep , createASession: 2})
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

            <DrillCard inCreateASession={true} drill={sampleDrill} session={sessionBeingCreated} index={1}/>
            <DrillCard inCreateASession={true} drill={sampleDrill} session={sessionBeingCreated} index={2}/>
            <DrillCard inCreateASession={true} drill={sampleDrill} session={sessionBeingCreated} index={3}/>
            <DrillCard inCreateASession={true} drill={sampleDrill} session={sessionBeingCreated} index={4}/>
            <DrillCard inCreateASession={true} drill={sampleDrill} session={sessionBeingCreated} index={5}/>
            <DrillCard inCreateASession={true} drill={sampleDrill} session={sessionBeingCreated} index={6}/>

            <DialogActions>
                <Button onClick={handleAddTheseDrillsAndNext}>
                    Add these drills & next
                </Button>
            </DialogActions>

        </DialogContent>
    )
}

export default CreateASessionStepTwo