import PostCard from "./PostCard"
import { Grid } from '@mui/material';
import { useState , useEffect } from 'react';

function CommunityFeed( { usersId , setUsersId } ) {
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
                    return <PostCard key={post.id} usersId={usersId} setUsersId={setUsersId} post={ post }/>
                    }
                )}
            </Grid>
        </Grid>
    )
}

export default CommunityFeed