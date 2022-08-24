import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "./Login/Login.js"
import TopNavBar from "./NavBar/TopNavBar.js";
import BottomNavBar from "./NavBar/BottomNavBar.js";
import CommunityFeed from "./Feed/CommunityFeed.js";
import User from "./User/User.js";
import Workout from "./Workout/Workout.js";

function App() {
  const [usersId, setUsersId] = useState(null);
  const [ infoOnWorkoutPage , setInfoOnWorkoutPage ] = useState({ list_of_drills_on_workout_page: [] })

  const handleFork = ( workoutSessionId ) => {
    fetch(`workout_sessions/${workoutSessionId}`)
    .then(r=>r.json())
    .then(j=> {
      setInfoOnWorkoutPage(j)
    })
  }

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json()
          .then( (j) => {
            setUsersId( {
              userId: j.id,
              userToViewId: j.id
            })
          })
        }
      })
  }, []);

  if (!usersId) return <Login setUsersId={setUsersId}/>;

  return (
    <>
      <TopNavBar usersId={usersId} setUsersId={setUsersId} />
      
      <Routes>

        <Route path="/workout" element={ <Workout info={infoOnWorkoutPage}/>}/>
        
        <Route path="/feed" element={ <CommunityFeed usersId={usersId} setUsersId={setUsersId} handleFork={handleFork}/> } />
        
        <Route path="/account" element={ <User usersId={usersId} setUsersId={setUsersId}/> } />
      
      </Routes>
      
      <BottomNavBar usersId={usersId} setUsersId={setUsersId} />
    </>
  );
}

export default App;