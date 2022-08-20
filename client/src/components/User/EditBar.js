import { Table , TableBody , TableCell , TableContainer , TableRow  } from '@mui/material';
import { Paper , Avatar , Stack } from '@mui/material'
import { useEffect, useState } from "react"

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
    }, [usersId])

    return (
        <TableContainer component={Paper} sx={{mt:2}}>
            <Table>
                <TableBody>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Username: @{userToViewDetails.username}
                        </TableCell>
                    </TableRow>
                
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Name: {userToViewDetails.name}
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            <Stack direction="row" spacing={0}>Favorite sports: {favoriteSportsToView.map( (sport) =>{
                                    return <Avatar key={sport.id} sx={{width: 27, height: 27, ml:1}} src={sport.sport_image}/>
                                })}
                            </Stack>                     
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EditBar