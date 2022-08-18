import { Button , Dialog , DialogActions , DialogContent , DialogContentText , DialogTitle , Slide } from '@mui/material';
import { forwardRef } from "react";


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateADrill( {open , handleCloseCreate} ) {
    return (
        <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>{
                    handleCloseCreate('createADrillOpen')
                }}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Drill</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>{
                    handleCloseCreate('createADrillOpen')
                }}>Disagree</Button>
                <Button onClick={()=>{
                    handleCloseCreate('createADrillOpen')
                }}>Agree</Button>
                </DialogActions>
            </Dialog>
    )
}

export default CreateADrill