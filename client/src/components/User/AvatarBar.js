import { Grid, Typography , Avatar , Button } from '@mui/material';
import { useEffect, useState } from "react"

function AvatarBar ( { usersId , setUsersId } ) {
  const [userToViewProfilePicture , setUserToViewProfilePicture] = useState(null)

  useEffect( ()=> {
    fetch(`/users/${usersId.userToViewId}`)
    .then(r => r.json())
    .then( (j) => {
      console.log('AvatarBar')
      setUserToViewProfilePicture(j.profile_picture)
    })
  }, [usersId.userToViewId])

  const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then((r) => {
        if (r.ok) {
          setUsersId(null);
        }
    });
  }

  const handleSubmitProfilePicture = (e) => {
    let formData = new FormData()
    formData.append('profile_picture' , e.target.files[0])

    fetch(`/users/${usersId.userId}`, {
      method: "PATCH",
      body: formData
    })
    .then(r=> r.json())
    .then(r=> {
      setUserToViewProfilePicture(r.profile_picture)
    })
  }

  return (
  <>
    <Grid container sx={{mt: 3}} align="center">
      
      <Grid item xs={4}>
        <Avatar
          sx={{ width: 120, height: 120 }}
          style={{alignSelf: 'center'}}
          src={userToViewProfilePicture}
        />
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

    { usersId.userId === usersId.userToViewId ? 
      <Grid container sx={{mt: 1}} align="center">

        <Grid item xs={4}>
          <Button variant="outlined" sx={{fontSize: 8}} component="label">
            Change Picture
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={(e) => {
                handleSubmitProfilePicture(e)
              }}
            />
          </Button>
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