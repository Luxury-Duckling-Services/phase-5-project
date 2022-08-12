import { Alert } from '@mui/material';

function LoginAlert( { errorMessage }) {
    return (
        <Alert severity="error" sx={{mt:-2 , mb:2}}>{errorMessage}</Alert>
    )
}

export default LoginAlert