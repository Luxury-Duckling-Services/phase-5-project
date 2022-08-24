import DrillCard from "./DrillCard";
import { Typography , Card , CardHeader , CardContent } from '@mui/material';

function Workout( { info } ) {
    return (
        <>
        <Card sx={{mt:2}}>
            {info.list_of_drills_on_workout_page.length === 0 ?
                <CardHeader
                    title={
                        <Typography sx={{mb:2}} variant="h5" align="center">
                            Today's Workout
                        </Typography>
                    }
                    subheader="Fork a workout session to get started."
                />
            :
                <CardHeader
                    title={
                        <Typography sx={{mb:2}} variant="h5" align="center">
                            Today's Workout
                        </Typography>
                    }
                    subheader={`You are forking a ${info.sports_category.sport_name} workout session created by ${info.creator.name} (@${info.creator.username}).`}
                />
            }

            <CardContent>
                <Typography sx={{mt:-3,mb:2}} align="center" variant="body1" color="text.primary">
                    {info.workout_session_title}
                </Typography>
             
                <Typography sx={{mt:-1}} align="left" variant="body2" color="text.secondary">
                    Workout session description: {info.description}
                </Typography>
            </CardContent>
        </Card>

        {info.list_of_drills_on_workout_page.map( (drill) => {
            return <DrillCard key={drill.id} drill={drill}/>
        })}
        </>
    )
}

export default Workout;