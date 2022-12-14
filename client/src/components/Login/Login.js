import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import { useState } from "react";
import { Typography, Divider, Box, Button, Grid } from '@mui/material';

function Login({ setUsersId }) {
    
    const [showLogin, setShowLogin] = useState(true);
    
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>

            </Grid>
            
            <Grid align='center' item xs={6}>
            
                <Typography variant="h3"
                    sx={{
                        mb:1,
                        mt:4
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
                        <LoginForm setUsersId={setUsersId} />
                        
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
                        <SignupForm setUsersId={setUsersId}/>
                        
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