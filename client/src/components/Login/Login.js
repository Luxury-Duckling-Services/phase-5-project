import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import React, { useState } from "react";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Typography, Divider, Box, Button, Grid } from '@mui/material';

function Login({ setUser }) {
    
    const [showLogin, setShowLogin] = useState(true);
    
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>

            </Grid>
            
            <Grid align='center' item xs={6}>

                <SportsSoccerIcon fontSize="large"
                    sx={{ mt: 6 }}
                />
            
                <Typography variant="h3"
                    sx={{
                        mb:1
                    }}
                >
                    Sporthub
                </Typography>

                <Typography variant="h6"
                    sx={{
                        mb:3
                    }}
                >
                    Push-Pull-Fork
                </Typography>
            
                {showLogin ?
                    (<Box sx={{m:2}}>
                        <LoginForm setUser={setUser} />
                        
                        <Divider sx={{mt: 2, mb: 2}} />
                        
                        <Typography variant="h6">
                            Don't have an account?
                        </Typography>
                        
                        <Button
                            variant="outlined"
                            sx={{color: "black", mt:2}}
                            onClick={() => setShowLogin(false)}
                        >
                            Sign Up Instead
                        </Button>
                    </Box>)
                    :
                    (<Box sx={{m:2}}>
                        <SignupForm setUser={setUser} />
                        
                        <Divider sx={{mt: 2, mb: 2}}/>
                        
                        <Typography variant="h6">
                            Already have an account?
                        </Typography>
                        
                        <Button
                            variant="outlined"
                            sx={{color: "black", mt:2}}
                            onClick={() => setShowLogin(true)}
                        >
                            Log In Instead
                        </Button>
                    </Box>
                )}
            </Grid>

        <Grid item xs={3}>

        </Grid>
    </Grid>
    )
}

export default Login