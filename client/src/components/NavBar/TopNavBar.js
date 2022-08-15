import { Link } from "react-router-dom";
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchBar from "./SearchBar.js"

function TopNavBar( ) {

    return (
      <AppBar position="sticky" sx={{backgroundColor: "white"}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="subtitle2"
                    sx={{
                        ml:-1,
                        mr:1,
                        color: 'black'
                    }}
                >
                    Sporthub
                </Typography>

                <SearchBar />
                


            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default TopNavBar