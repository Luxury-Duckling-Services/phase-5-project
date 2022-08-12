import React, { useState } from "react";
import { Box, Button , Divider , TextField , Switch , Typography , Stack } from '@mui/material';

function LoginForm({ setUser }) {

  const [credentialPassword, setCredentialPassword] = useState({
    email: "",
    password: ""
  })

  const [useEmail , setUseEmail] = useState(true)

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