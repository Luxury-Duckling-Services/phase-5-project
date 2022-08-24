import PostCardForDrills from "./PostCardForDrills"
import PostCardForSessions from "./PostCardForSessions"
import { Grid } from '@mui/material';
import { useState , useEffect } from 'react';

function CommunityFeed( { usersId , setUsersId , handleFork } ) {
    const [ allPosts , setAllPosts ] = useState( [] )

    useEffect( ()=> {
        fetch('/posts')
        .then( r=> r.json())
        .then( (j)=> {
            setAllPosts(j)
        })
    } , [])
    
    return (
        <Grid container sx={{mt: 0}} align="center">
            <Grid item xs={12}>
                {allPosts.map( (post) => {
                        if (post.drill) {
                            return <PostCardForDrills key={post.id} usersId={usersId} setUsersId={setUsersId} post={ post }/>
                        }
                        if (post.workout_session) {
                            return <PostCardForSessions key={post.id} usersId={usersId} setUsersId={setUsersId} post={ post } handleFork={handleFork} />
                        }
                    }
                )}
            </Grid>
        </Grid>
    )
}

export default CommunityFeed