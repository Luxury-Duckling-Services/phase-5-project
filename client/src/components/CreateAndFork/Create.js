import { MenuItem , Menu, Fab , Typography , Button } from '@mui/material';
import { useState , forwardRef } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { Dialog , DialogActions , DialogContent , DialogContentText , DialogTitle , Slide } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const toCreates = ['Create a drill', 'Create a session', 'Create a program'];

function Create() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fab size="small" color="secondary" sx={{mt:1.75}} >
            
            <AddOutlinedIcon onClick={handleOpenNavMenu}/>
            
            <Menu
                anchorEl={anchorElNav}
                keepMounted
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: 'block'
                }}
            >
                {toCreates.map((toCreate) => (
                    <MenuItem key={toCreate} onClick={(e)=> {
                        handleCloseNavMenu()
                        handleClickOpen()
                        }}>
                        <Typography variant='subtitle2'>{toCreate}</Typography>
                    </MenuItem>
                ))}
            </Menu>


            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
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
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>

        </Fab>
    )
}

export default Create