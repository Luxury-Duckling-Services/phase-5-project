import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar } from '@mui/material';
import SearchBar from "./SearchBar.js"

function TopNavBar( { usersId , setUsersId} ) {

    return (
      <AppBar position="sticky" sx={{backgroundColor: "white" , height:70}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                
                <SearchBar usersId={usersId} setUsersId={setUsersId} />

            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default TopNavBar