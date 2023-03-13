
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
    <img className = "loginlogo" onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
    <div class="form-box">
            <Form class="form" onSubmit={handleSubmit}>
            <span class="title">Sign up</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div class="form-container">
            <input
          type="text"
          class="input" 
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          class="input" 
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          class="input" 
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          class="input" 
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          class="input" 
          id="password_confirmation"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
            </div>

            <button type="submit">Sign Up!</button>
            
            </Form>
            <div class="form-section">
              <p>Have an account? <a href="">Log in</a> </p>
      </div>
    </div>
    </div>
    );
}
export default Signup
//<p>Already have and acount?</p>
// <button onClick={returnToLogin}>Return to Login</button>






  