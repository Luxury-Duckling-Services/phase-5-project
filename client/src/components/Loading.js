import { CircularProgress , Grid } from '@mui/material';

function Loading() {
    return (
        <Grid
            align='center'
            justify="center"
            direction="column"
            container
            spacing={0}
        >
            <Grid item>
                <CircularProgress />
            </Grid>
        </Grid>        
    )
}

export default Loading;