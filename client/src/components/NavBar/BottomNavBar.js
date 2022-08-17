import { useRef , useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box , BottomNavigation , BottomNavigationAction , Paper } from '@mui/material';
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';

function BottomNavBar( { usersId , setUsersId } ) {

    const [value, setValue] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
      }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
        
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={20}>
            
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction onClick={()=>{
                        console.log(value)}
                    }
                    component={Link} to="/workout" label="Workout" icon={<SportsOutlinedIcon />} />
                
                <BottomNavigationAction onClick={()=>{
                        console.log(value)}
                    }
                    component={Link} to="/feed" label="Feed" icon={<FeedOutlinedIcon />} />
                
                <BottomNavigationAction onClick={()=>{
                        setUsersId({ ...usersId , userToViewId: usersId.userId})
                    }}
                    component={Link} to="/account" label="Account" icon={<PortraitOutlinedIcon />} />

            </BottomNavigation>
        </Paper>
    </Box>
  );
}

export default BottomNavBar