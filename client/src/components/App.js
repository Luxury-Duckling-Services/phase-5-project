import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "./Login/Login.js"
import { Button, Typography } from '@mui/material';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then(r => {
        if (r.ok) {
          r.json()
          .then(user => {
            setUser(user)
          })
        }
      })
  }, []);

  const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then((r) => {
        if (r.ok) {
          setUser(null);
        }
    });
  }

  if (!user) return <Login setUser={setUser}/>;

  return (
    <Button onClick={handleLogout}></Button>
  );
}

export default App;