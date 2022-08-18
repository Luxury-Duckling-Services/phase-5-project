import { Button , Dialog , DialogActions , DialogContent , DialogContentText , DialogTitle , Slide } from '@mui/material';
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateASession( {open , handleCloseCreate} ) {
    return (
        <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=>{
                    handleCloseCreate('createASessionOpen')
                }}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Session</DialogTitle>
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
                    handleCloseCreate('createASessionOpen')
                }}>Disagree</Button>
                <Button onClick={()=>{
                    handleCloseCreate('createASessionOpen')
                }}>Agree</Button>
                </DialogActions>
            </Dialog>
    )
}

export default CreateASession