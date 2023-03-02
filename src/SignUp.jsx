
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({setUser}) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate()
  const returnToLogin = () => navigate('/login')

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
              "username": username,
              "name": name,
              "email": email,
              "password": password,
              "password_confirmation": passwordConfirmation
            }),
        }).then((req) => {
            if (req.ok) {
                req.json()
          .then((user) => setUser(user));
          navigate('/UserSportsbook')      
            }
        })
    }
return (
    <div>
        <div>
        <img onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
            <Form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation"></label>
        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
            <button type="submit">Sign Up!</button>
            <p>Already have and acount?</p>
            <button onClick={returnToLogin}>Return to Login</button>
            </Form>
        </div>
    </div>
    );
}
export default Signup





  