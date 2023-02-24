import { useNavigate } from "react-router-dom";

function UserNavBar(){
    let navigate = useNavigate();
return(
    <div id="banner" className = "banner">
        <div className = "navBarLogin">
            <img className = "piclogo" onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
            <div className = "logOutButton">
            <button onClick={() => {navigate('/')}}> LogOut</button>
            </div>
        </div>
        
        
    </div>
    
)
}

export default UserNavBar;