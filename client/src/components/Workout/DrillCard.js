import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card , CardHeader , CardMedia , CardContent , CardActions , Collapse , IconButton , TextField , Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

import { useState } from "react"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })
        
    (({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function DrillCard( { drill , index } ) {

    const [ expanded, setExpanded] = useState(false);
    const [ videoData , setVideoData] = useState("");

    const handleExpandClick = () => {
        fetch(`drills/${drill.id}`)
        .then(r=>r.json())
        .then(j=>{
            setVideoData(j.video_data)
            setExpanded(!expanded);
        })        
    };

    return (
        <Card sx={{m:1}}>
            <CardHeader
                subheader={`Drill #${index+1}: ${drill.drill_title}`}
            />

            <CardContent>
                <Grid container spacing={0}>
                    
                    <Grid item xs={3.5}>
                        <TextField
                            disabled={true}
                            id="set"
                            label="Sets"
                            value={drill.set}
                            fullWidth
                            sx={{mb:2}}
                        />
                    </Grid>

                    <Grid item xs={3.5}>
                        <TextField
                            disabled={true}
                            id="rep"
                            label="Reps"
                            value={drill.rep}
                            fullWidth
                            sx={{mb:2}}
                        />
                    </Grid>

                    <Grid item xs={5}>
                        <TextField
                            disabled={true}
                            id="rest_time"
                            label="Rest time"
                            value={drill.rest_time}
                            fullWidth
                            sx={{mb:2}}
                        />
                    </Grid>

                </Grid>

                <Typography align="left" variant="body2" color="text.secondary">
                    Drill instruction: {drill.instruction}
                </Typography>
            </CardContent>

            <CardActions>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                
                    <CardMedia
                        component="video"    
                        controls
                        src={videoData}
                    />

                </CardContent>
            </Collapse>
        </Card>
    );
}

export default DrillCard