import { Grid, Typography , Avatar , Button } from '@mui/material';

function AvatarBar ( {userId , viewingId , setUser } ) {

  const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then((r) => {
        if (r.ok) {
          setUser(null);
        }
    });
  }

  return (
  <>
    <Grid container sx={{mt: 3}} align="center">
      
      <Grid item xs={4}>
        <Avatar
          sx={{ width: 120, height: 120 }}
          style={{alignSelf: 'center'}}
        >
          H
        </Avatar>
      </Grid>

      <Grid item container xs={4} direction='column'>
        <Grid item>
          <Typography sx={{mt: 5}}>5000000</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6">Followers</Typography>
        </Grid>
      </Grid>

      <Grid item container xs={4} direction='column'>
        <Grid item>
          <Typography sx={{mt: 5}}>250</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6">Following</Typography>
        </Grid>
      </Grid>
      
    </Grid>

    { userId === viewingId ? 
      <Grid container sx={{mt: 1}} align="center">

        <Grid item xs={4}>
          <Button variant="outlined" sx={{fontSize: 8}}>Change Picture</Button>
        </Grid>

        <Grid item xs={4}>
          
        </Grid>

        <Grid item xs={4}>
          <Button variant="outlined" sx={{fontSize: 8}} onClick={handleLogout}>Logout</Button>
        </Grid>

      </Grid>
      
      :

      <Grid container sx={{mt: 1}} align="center">

        <Grid item xs={4}>
          
        </Grid>

        <Grid item xs={4}>
          {0 === 1? <Button variant="outlined" sx={{fontSize: 8}}>Follow</Button> : <Button variant="outlined" sx={{fontSize: 8}}>Unfollow</Button> }
        </Grid>

        <Grid item xs={4}>
          <Button variant="outlined" sx={{fontSize: 8}}>Message</Button>
        </Grid>

      </Grid>

    }
  </>
  );
};
export default AvatarBar;
