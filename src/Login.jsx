import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SignUp from "./SignUp"
import { Form } from 'react-router-dom'



function Login({ setUsers }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleOnClick = () => navigate("/signup")
  const cridentials = {username: username, password: password}
  
  function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(cridentials)
      })
          .then((req) => {
          if (req.ok) {
              req.json().then((user) => setUsers(user));
              navigate('/UserSportsbook')
          }

  })
  }
  return (
      <div>
        <img onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
          <Form onSubmit={handleSubmit}>
              <p>Login</p>
              <input
                  type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
              <input 
                  type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit">Login</button>
              <p>Don't have an account?</p>
              <button type="button" onClick={handleOnClick}>Sign up</button>
          </Form>
          </div>
      );
  }
  export default Login