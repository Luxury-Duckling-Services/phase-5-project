import { Table , TableBody , TableCell , TableContainer , TableRow  } from '@mui/material';
import { Paper , Box } from '@mui/material'
import { useEffect, useState } from "react"

import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsTennisOutlinedIcon from '@mui/icons-material/SportsTennisOutlined';
import SportsFootballOutlinedIcon from '@mui/icons-material/SportsFootballOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';

function sportToIcon(sport) {
    switch(sport.sport_name) {
        case "soccer": 
            return <SportsSoccerOutlinedIcon sx={{fontSize: 15}}/>
        
        case "basketball": 
            return <SportsBasketballOutlinedIcon sx={{fontSize: 15}}/>

        case "tennis": 
            return <SportsTennisOutlinedIcon sx={{fontSize: 15}}/>

        case "football": 
            return <SportsFootballOutlinedIcon sx={{fontSize: 15}}/>
        
        case "golf": 
            return <GolfCourseOutlinedIcon sx={{fontSize: 15}}/>
      
        case "weight lifting": 
            return <FitnessCenterOutlinedIcon sx={{fontSize: 15}}/>
 
        case "running": 
            return <DirectionsRunOutlinedIcon sx={{fontSize: 15}}/>
    }
}

function EditBar( { usersId } ) {
    const [userToViewDetails , setUserToViewDetails] = useState({})
    const [favoriteSportsToView , setFavoriteSportsToView] = useState([])

    useEffect( ()=> {
        fetch(`/users/${usersId.userToViewId}`)
        .then(r => r.json())
        .then( (j) => {
            setUserToViewDetails(j)
            setFavoriteSportsToView(j.sports_categories)
        })
    }, [])

    return (
        <TableContainer component={Paper} sx={{mt:2}}>
            <Table>
                <TableBody>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Username: {userToViewDetails.username}
                        </TableCell>
                    </TableRow>
                
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Name: {userToViewDetails.name}
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Training locations: {userToViewDetails.training_location}
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Favorite Sports: {favoriteSportsToView.map( (sport) =>{
                                    return <Box sx={{ display: 'inline' , mx: 0.5 }} key={sport.id}>{sportToIcon(sport)}</Box>})}                          
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Achievements and goals: {userToViewDetails.achievement_goal}
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EditBar