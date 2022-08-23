import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card , CardHeader , CardMedia , CardContent , CardActions , Collapse , Avatar , IconButton , Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useState } from "react"
import { useNavigate } from "react-router-dom";

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

function PostCardForDrills( { post, usersId , setUsersId }) {
  let navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{m:1}}>
      <CardHeader
        avatar={
          <Avatar src={post.user.profile_picture} onClick={()=>{
            setUsersId({ ...usersId, userToViewId: post.user.id})
            navigate("../account")
          }}/>
        }
        title={`${post.user.name} (@${post.user.username}) created a new ${post.sports_category.sport_name} drill`}
        subheader={`at ${post.created_at}`}
      />
      
      <CardMedia
        component="video"    
        controls 
        src={post.drill.video_data}
      />

      <CardContent>
        <Typography sx={{mt:-1,mb:1}} align="center" variant="body1" color="text.primary">
          {`${post.drill.drill_title}`}<br/>
        </Typography>
        
        <Typography align="left" variant="body2" color="text.secondary">
          Drill instruction: {`${post.drill.instruction}`}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton>
          <FavoriteIcon />
        </IconButton>

        <IconButton>
          <ShareIcon />
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph align="left">{post.post_subtitle}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


export default PostCardForDrills
