import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "./Login/Login.js"
import TopNavBar from "./NavBar/TopNavBar.js";
import BottomNavBar from "./NavBar/BottomNavBar.js";
import User from "./User/User.js";

function App() {
  const [usersId, setUsersId] = useState(null);

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
        
        <Route path="/account" element={ <User usersId={usersId} setUsersId={setUsersId}/> } />
      
      </Routes>
      
      <BottomNavBar usersId={usersId} setUsersId={setUsersId} />
    </>
  );
}

export default App;