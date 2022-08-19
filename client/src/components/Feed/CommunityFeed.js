import PostCard from "./PostCard"
import { Grid } from '@mui/material';

function CommunityFeed( { usersId , setUsersId } ) {

    

    return (
        <Grid container sx={{mt: 0}} align="center">
            <Grid item xs={12}>
                
                <PostCard usersId={usersId} setUsersId={setUsersId}/>

                <PostCard usersId={usersId} setUsersId={setUsersId}/>

                <PostCard usersId={usersId} setUsersId={setUsersId}/>
            
            </Grid>
        </Grid>
    )
}

export default CommunityFeed