import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"






import Login from "./Login/Login.js"
import NavBar from "./NavBar/NavBar.js";
import User from "./User/User.js";



function App() {
  const [user, setUser] = useState(null);
  const [viewingId , setViewingId] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json()
          .then(user => {
            setUser(user)
            setViewingId(user.id)
          })
        }
      })
  }, []);

  

  if (!user) return <Login setUser={setUser}/>;

  return (
    <>
      <User userId={user.id} viewingId={viewingId} setUser={setUser}/>
      <NavBar />
      
    </>
  );
}

export default App;