import { MenuItem , Menu, Fab , Typography } from '@mui/material';
import { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CreateADrill from './CreateADrill';
import CreateASession from './CreateASession';
import CreateAProgram from './CreateAProgram';

function Create() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [createTypeOpen, setCreateTypeOpen] = useState({
        createADrillOpen: false,
        createASessionOpen: false,
        createAProgramOpen: false
    });
    function handleOpenCreate( typeToOpen ) {
        setAnchorElNav(null);
        let createTypeOpenCopy = {...createTypeOpen}
        createTypeOpenCopy[typeToOpen] = true
        setCreateTypeOpen({ ...createTypeOpenCopy})
    }
    function handleCloseCreate( typeToClose ) {
        let createTypeOpenCopy = {...createTypeOpen}
        createTypeOpenCopy[typeToClose] = false
        setCreateTypeOpen({ ...createTypeOpenCopy})
    }

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
                <MenuItem onClick={()=> {
                    handleOpenCreate('createADrillOpen')
                }}>
                    <Typography variant='subtitle2'>Create a drill</Typography>
                </MenuItem>
                
                <MenuItem onClick={()=> {
                    handleOpenCreate('createASessionOpen')
                }}>
                    <Typography variant='subtitle2'>Create a session</Typography>
                </MenuItem>

                <MenuItem onClick={()=> {
                    handleOpenCreate('createAProgramOpen')
                }}>
                    <Typography variant='subtitle2'>Create a program</Typography>
                </MenuItem>
                
            </Menu>

            <CreateADrill open={createTypeOpen.createADrillOpen} handleCloseCreate={handleCloseCreate}/>
            <CreateASession open={createTypeOpen.createASessionOpen} handleCloseCreate={handleCloseCreate}/>
            <CreateAProgram open={createTypeOpen.createAProgramOpen} handleCloseCreate={handleCloseCreate}/>
        </Fab>
    )
}

export default Create;