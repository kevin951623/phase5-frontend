import { useNavigate } from "react-router-dom";

function GuestNavBar(){
    let navigate = useNavigate();
return(
    <div id="banner" className = "banner">
        <div className = "navBarLogin">
            <img className = "piclogo" onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
            <div className = "logInButton">
            <button onClick={() => {navigate('/login')}}> LogIn</button>
            </div>
        </div>
        
        
    </div>
    
)
}

export default GuestNavBar;