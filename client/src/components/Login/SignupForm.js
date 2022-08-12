import React, { useState } from "react";
import { Box, Button , TextField } from '@mui/material';

function SignupForm({ setUser }) {
  const [ newUser , setNewUser ] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  function handleSubmit(e) {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( newUser ),
    })
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user));
      }
    });
  }

  return (
    <Box>
      <TextField
        id="username"
        label="Username"
        placeholder="Pick your unique username..."
        value={newUser.username}
        fullWidth
        onChange={(e) => setNewUser({ ...newUser,
          username: e.target.value })
        }
        sx={{mb:2}}
      />

      <TextField
        id="email"
        label="Email"
        placeholder="Enter your email..."
        value={newUser.email}
        fullWidth
        onChange={(e) => setNewUser({ ...newUser,
          email: e.target.value })
        }
        sx={{mb:2}}
      />

      <TextField
        id="name"
        label="Full Name"
        placeholder="Enter your full name..."
        value={newUser.name}
        fullWidth
        onChange={(e) => setNewUser({ ...newUser,
          name: e.target.value })
        }
        sx={{mb:2}}
      />

      <TextField
        id="password"
        label="Password"
        placeholder="Enter a strong password..."
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser,
          password: e.target.value })
        }
        sx={{mb:2}}
        fullWidth
        type="password"
      />
      
      <TextField
        id="password-confirmation"
        placeholder="Confirm your password..."
        label="Password Confirmation"
        value={newUser.password_confirmation}
        onChange={(e) => setNewUser({ ...newUser,
          password_confirmation: e.target.value })
        }
        sx={{mb:2}}
        fullWidth
        type="password"
      />
        
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{color: "black"}}
      >
        Sign Up
      </Button>

    </Box>
);
}

export default SignupForm;