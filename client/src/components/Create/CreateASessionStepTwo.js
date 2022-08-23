import { Button , DialogActions , DialogContent , Stepper , Step , StepLabel } from '@mui/material';

import { useState } from "react";

import CreateASessionStepTwoDrillCard from './CreateASessionStepTwoDrillCard';
import CreateASessionStepTwoSearchBar from './CreateASessionStepTwoSearchBar';

function CreateASessionStepTwo( { activeStep , setActiveStep , sessionBeingCreated , setSessionBeingCreated } ) {

    const [ drillsToBeAddedToTheSession , setDrillsToBeAddedToTheSession ] = useState( [] )

    const handleAddTheseDrillsAndNext = () => {
        
        let fetches = []

        drillsToBeAddedToTheSession.forEach( (drill , index) => {
            fetches.push(
                fetch('/drill_session_joins' , {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify( {
                        drill_id: drill.id,
                        rep: drill.rep,
                        set: drill.set,
                        rest_time: drill.rest_time,
                        workout_session_id: sessionBeingCreated.id,
                        index: index+1
                    } )
                })
                .then( (r)=> {} )
            )  
        })

        Promise.all(fetches).then( function() {
            console.log(sessionBeingCreated)
            // setActiveStep({...activeStep , createASession: 2})
        })
    }
    
    const insertOneDrillToTheBottom = ( drill ) => {
        if (!( drillsToBeAddedToTheSession.map((oneDrill)=>(oneDrill.id)).includes(drill.id) )) {
            setDrillsToBeAddedToTheSession( [ ...drillsToBeAddedToTheSession , { ...drill , thisDrillBeingEdited: true } ])
        }
    }

    const updateSetRepRestTime = ( object ) => {
        setDrillsToBeAddedToTheSession( drillsToBeAddedToTheSession.map( (drill) => {
            if (drill.id === object.drill_id) {
                
                if (drill.thisDrillBeingEdited === true) {
                    return { ...drill , 
                        set: object.set,
                        rep: object.rep,
                        rest_time: object.rest_time,
                        thisDrillBeingEdited: false
                    }
                } else {
                    return { ... drill,
                        thisDrillBeingEdited: true
                    }
                }

            } else {
                return drill
            }
        }) )
    }

    const deleteDrill = (id) => {
        setDrillsToBeAddedToTheSession( drillsToBeAddedToTheSession.filter( (drill) => {
            if (drill.id === id) {
                return false
            } else {
                return true
            }
        }) )
    }

    const moveUp = (id) => {
        let temp
        let drillsToBeAddedToTheSessionCopy = [ ...drillsToBeAddedToTheSession ]
        
        drillsToBeAddedToTheSession.forEach( (drill , index) => {
            if (drill.id === id) {
                if (index !==0) {
                    temp = {...drill}
                    drillsToBeAddedToTheSessionCopy[index] = { ...drillsToBeAddedToTheSessionCopy[index-1]}
                    drillsToBeAddedToTheSessionCopy[index-1] = {...temp}
                }
            }
        })
        setDrillsToBeAddedToTheSession( [...drillsToBeAddedToTheSessionCopy] )
    }

    const moveDown = (id) => {
        let temp
        let drillsToBeAddedToTheSessionCopy = [ ...drillsToBeAddedToTheSession ]
        
        drillsToBeAddedToTheSession.forEach( (drill , index) => {
            if (drill.id === id) {
                if (index !== drillsToBeAddedToTheSessionCopy.length -1) {
                    temp = {...drill}
                    drillsToBeAddedToTheSessionCopy[index] = { ... drillsToBeAddedToTheSessionCopy[index+1]}
                    drillsToBeAddedToTheSessionCopy[index+1] = {...temp}
                }
            }
        })
        setDrillsToBeAddedToTheSession( [...drillsToBeAddedToTheSessionCopy] )
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

            {drillsToBeAddedToTheSession.map( ( drill , index ) => {
                    return <CreateASessionStepTwoDrillCard key={drill.id} drill={drill} updateSetRepRestTime={updateSetRepRestTime} deleteDrill={deleteDrill} moveUp={moveUp} moveDown={moveDown} index={index} />
                })
            }

            <CreateASessionStepTwoSearchBar insertOneDrillToTheBottom={insertOneDrillToTheBottom}/>

            <DialogActions>
                <Button
                    onClick={handleAddTheseDrillsAndNext}
                    disabled={ 
                        drillsToBeAddedToTheSession.reduce( (previousValue , currentValue) => previousValue || currentValue.thisDrillBeingEdited , false )
                        || drillsToBeAddedToTheSession.length ===0 }
                    >
                    { drillsToBeAddedToTheSession.reduce( (previousValue , currentValue) => previousValue || currentValue.thisDrillBeingEdited , false )
                        || drillsToBeAddedToTheSession.length ===0 ? "Confirm set/rep/rest first" : "Confirm session & next" }
                </Button>
            </DialogActions>

        </DialogContent>
    )
}

export default CreateASessionStepTwo