import { useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react"

function UserNavBar({user}){
    let navigate = useNavigate();
    

return(
    <div id="banner" className = "banner">
        <div className = "navBarLogin">
            <img className = "piclogo" onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
            <div className = "myBetsButton"><button onClick={() => {navigate('/MyBets')}}> My Bets</button> </div>
            <div className = "logOutButton"><button onClick={() => {navigate('/')}}> LogOut</button> </div>
            <h3>{user ? user.name : ""} {user ? user.balance : ""}</h3>
        </div>
    </div>
    
)
}

export default UserNavBar;