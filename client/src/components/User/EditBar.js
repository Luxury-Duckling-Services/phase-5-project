import { Table , TableBody , TableCell , TableContainer , TableRow  } from '@mui/material';
import { Paper } from '@mui/material'

function EditBar( {userId , viewingId} ) {
  return (
    <TableContainer component={Paper} sx={{mt:2}}>
      <Table>
        <TableBody>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    Username: CR7
                </TableCell>
            </TableRow>
          
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    Name: Leo Messi
                </TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    Training locations: De Anza Force Academy, San Jose Earthquake Academy
                </TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    Sports: soccer, running, basketball
                </TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    Sports achievements and goals: 
                </TableCell>
            </TableRow>


        </TableBody>
      </Table>
    </TableContainer>


  );
}

export default EditBar