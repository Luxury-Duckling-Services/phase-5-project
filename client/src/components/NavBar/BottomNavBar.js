import { useRef , useState , useEffect } from 'react';
import { Box , BottomNavigation , BottomNavigationAction , Paper } from '@mui/material';
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';

function BottomNavBar() {

    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const [messages, setMessages] = useState([])

    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages([]);
      }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
        
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={20}>
            
            
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    console.log(newValue)
                    console.log(value)
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction label="Workout" icon={<SportsOutlinedIcon />} />
                <BottomNavigationAction label="Feed" icon={<FeedOutlinedIcon />} />
                <BottomNavigationAction label="Chat" icon={<ChatOutlinedIcon />} />
                <BottomNavigationAction label="Account" icon={<PortraitOutlinedIcon />} />

            </BottomNavigation>
        </Paper>
    </Box>
  );
}

export default BottomNavBar



// Under construction