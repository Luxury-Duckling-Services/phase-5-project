import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card , CardHeader , CardMedia , CardContent , CardActions , Collapse , IconButton , TextField , Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

import { useState } from "react"

import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    set: Yup
        .number('Enter number of sets for this drill.')
        .min(1, 'Must be at least 1.')
        .required('Required'),
    rep: Yup
        .number('Enter number of reps for this drill.')
        .min(1, 'Must be at least 1.')
        .required('Required'),
    rest_time: Yup
        .number('Enter rest time between sets, in seconds.')
        .min(15, 'Must be at least 15 seconds.')
        .required('Required'),
});

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

function DrillCard( { inCreateASession , drill , workoutSession , index } ) {

    const formik = useFormik({
        initialValues: {
            set: 1,
            rep: 1,
            rest_time: 15
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log( {
                drill_id: drill.id,
                set: parseInt(values.set),
                rep: parseInt(values.rep), 
                rest_time: parseInt(values.rest_time)
            })
        }
    });

    const [expanded, setExpanded] = useState(false);
    const [beingEdited , setBeingEdited] = useState(true)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{m:1}}>
            <CardHeader
                subheader={`Drill ${index}: ${drill.drill_title}`}
            />

        <form onSubmit={formik.handleSubmit}>
            <CardContent>
                <Grid container spacing={0}>
                    
                    <Grid item xs={4}>
                        <TextField
                            id="set"
                            label="Sets"
                            placeholder="Enter number of sets for this drill..."
                            value={formik.values.set}
                            fullWidth
                            onChange={formik.handleChange}
                            sx={{mb:2}}
                            error={formik.touched.set && Boolean(formik.errors.set)}
                            helperText={formik.touched.set && formik.errors.set}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="rep"
                            label="Reps"
                            placeholder="Enter number of reps for this drill..."
                            value={formik.values.rep}
                            fullWidth
                            onChange={formik.handleChange}
                            sx={{mb:2}}
                            error={formik.touched.rep && Boolean(formik.errors.rep)}
                            helperText={formik.touched.rep && formik.errors.rep}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="rest_time"
                            label="Rest time"
                            placeholder="Enter rest time between sets, in seconds..."
                            value={formik.values.rest_time}
                            fullWidth
                            onChange={formik.handleChange}
                            sx={{mb:2}}
                            error={formik.touched.rest_time && Boolean(formik.errors.rest_time)}
                            helperText={formik.touched.rest_time && formik.errors.rest_time}
                        />
                    </Grid>

                </Grid>
            </CardContent>

            <CardActions disableSpacing>
        
                {beingEdited?
                    <IconButton type="submit">
                        <CheckOutlinedIcon/>
                    </IconButton>
                    :
                    <IconButton onClick={()=> {
                        setBeingEdited(true)
                    }}>
                        <EditOutlinedIcon />
                    </IconButton>
                }

                <IconButton>
                    <DeleteForeverOutlinedIcon />
                </IconButton>

                <IconButton>
                    <ArrowUpwardOutlinedIcon />
                </IconButton>

                <IconButton>
                    <ArrowDownwardOutlinedIcon />
                </IconButton>
            
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                
            </CardActions>
        </form>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                
                    <CardMedia
                        component="video"    
                        controls 
                        src={drill.video_data}
                    />

                </CardContent>
            </Collapse>
        </Card>
    );
}

export default DrillCard;