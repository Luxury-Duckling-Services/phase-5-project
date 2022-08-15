import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "./Login/Login.js"
import BottomNavBar from "./NavBar/BottomNavBar.js";
import User from "./User/User.js";

function App() {
  const [usersId, setUsersId] = useState(null);

  useEffect(() => {
    console.log("App loaded")
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
      <User usersId={usersId} setUsersId={setUsersId}/>
      <BottomNavBar />
    </>
  );
}

export default App;