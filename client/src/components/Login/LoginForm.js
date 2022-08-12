import { useState } from "react";
import { Box, Button , Divider , TextField } from '@mui/material';
import LoginAlert from "./LoginAlert";

function LoginForm({ setUser }) {

  const [credentialPassword, setCredentialPassword] = useState({
    email: "",
    password: ""
  })

  const [useEmail , setUseEmail] = useState(true)

  const [errors , setErrors] = useState([])

  function handleSubmit(e) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( credentialPassword ),
    })
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          setUser(user)
        })}
      else {
        r.json()
        .then((err)=>{
          setErrors(err.errors)
        })
      }
     });
  }
  
  return (
    <Box>
      {useEmail ? 
        <TextField
          id="email"
          label="Email"
          placeholder="Enter email..."
          value={credentialPassword.email}
          fullWidth
          onChange={(e) => {
              setCredentialPassword( {...credentialPassword , email: e.target.value} ) 
          }
        }
        sx={{mb:2}}/>
      :
        <TextField
          id="username"
          label="Username"
          placeholder="Enter username..."
          value={credentialPassword.username}
          fullWidth
          onChange={(e) => {
              setCredentialPassword( {...credentialPassword , username: e.target.value} ) 
            }
          }
          sx={{mb:2}}/>
      }

      {errors.length > 0 ? <LoginAlert errorMessage={errors[0]}/> : <></>}

      <TextField
        id="password"
        placeholder="Enter password..."
        label="Password"
        value={credentialPassword.password}
        fullWidth
        onChange={(e) => {
            setCredentialPassword( {...credentialPassword , password: e.target.value} )
          }
        }
        sx={{mb:2}}
        type="password"
      />
    
      <Button
        variant="outlined"
        sx={{color: "black"}}
        onClick={handleSubmit}
      >
        Log In
      </Button>

      <Divider sx={{mt: 2, mb: 2}}/>

      <Button
        variant="outlined"
        sx={{color: "black"}}
        onClick={(e) => {
          setErrors([])
          if (useEmail) {
            setCredentialPassword({
              username: "",
              password: ""
            })
          }
          else {
            setCredentialPassword({
              email: "",
              password: ""
            })
          }
          setUseEmail(!useEmail)}
        }
      >
        { useEmail ?  "Log in via username" : "Log in via email" }
      </Button>
    </Box>
  )
}

export default LoginForm;