import { Link } from "react-router-dom";
import { AppBar, Fab , Grid, Badge } from '@mui/material';
import SearchBar from "./SearchBar.js"
import Create from "../CreateAndFork/Create.js"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

function TopNavBar( { usersId , setUsersId} ) {

    return (
      <AppBar position="sticky" sx={{backgroundColor: "green" , height:70}}>
        <Grid
          container
          backgroundColor="white"
          justify="center"
          sx={{height:70}}
        >
          
          <Grid item xs={1.5} align="center">
            <Create />
          </Grid>
            
          <Grid item xs={1.5} align="center">    
            <Fab size="small" color="secondary" sx={{mt:1.75}}>
              <ContentCopyOutlinedIcon/>
            </Fab>
          </Grid>
           
          <Grid item xs={6} align="center">
            <SearchBar usersId={usersId} setUsersId={setUsersId} />
          </Grid>
          
          <Grid item xs={1.5} align="center">
            <Fab size="small" color="primary" sx={{mt:1.75}}>
              <Badge badgeContent={2} color="error">
                <NotificationsOutlinedIcon/>
              </Badge>
            </Fab>
          </Grid>

          <Grid item xs={1.5} align="center">
            <Fab size="small" color="primary" sx={{mt:1.75}}>
              <Badge badgeContent={3} color="error">
                <QuestionAnswerOutlinedIcon/>
              </Badge>
            </Fab>
          </Grid>

      </Grid>
    </AppBar>
  )
}

export default TopNavBar