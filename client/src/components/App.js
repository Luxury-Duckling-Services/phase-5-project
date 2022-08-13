import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "./Login/Login.js"
import NavBar from "./NavBar/NavBar.js";
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
      <User usersId={usersId} setUsersId={setUsersId}/>
      <NavBar />
    </>
  );
}

export default App;