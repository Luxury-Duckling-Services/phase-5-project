import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

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