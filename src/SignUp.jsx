// import { useNavigate } from "react-router-dom";

// function SignUp (){
//     let navigate = useNavigate();
//     return(
//         <>
//         <div>
//         <img onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
//         <form>
//             <div> Create a FanMade Sportsbook Account</div>
//             <label>  Name: <input type="text" name="Name" /></label>  
//             <label>  Email Address: <input type="text" name="Email Address" /></label>  
//             <label>  Password: <input type="text" name="Password" /></label> 
//             <label>  Confirm Password: <input type="text" name="Confirm Password" /></label> 
//             <input type="Submit" value="Create Account" />
//         </form>
//         <button onClick={() => {navigate('/Login')}} href="/Login">Login Instead</button>
        
//         </div>
//         </>
//     )

// }
// export default SignUp;

import React, { useState } from "react";
import{ useNavigate} from 'react-router-dom'

const Signup = ({formToggle, setFormToggle, setUser}) => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e) {
      e.preventDefault();
      fetch('http://localhost:3000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "username": username,
          "password": password,
          "password_confirmation": passwordConfirmation
        }),
      })
        .then((r) => r.json())
        .then(setUser);
        navigate("/UserSportsbook")
    }
    return (
      <div className="signup-form-container">
        <img onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
        <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
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
        <button className="signup-submit" type="submit">Submit</button>
        <div onClick={() => setFormToggle(!formToggle)}>Already have an account?
        <button onClick={() => {navigate('/Login')}} href="/Login">Login Instead</button>
        </div>
      </form>
      </div>
      
    );
  }

  export default Signup