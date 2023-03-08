import { useNavigate } from "react-router-dom";

// import { useEffect, useState } from "react"

function UserNavBar({user, setUser}){
    let navigate = useNavigate();
    

function logOut(){
    fetch("/logout", {
        method: "DELETE",
    }).then((r) => {
        if (r.ok) {
            navigate('/')
            setUser(null)
        }
    })
 }



return(
    <div id="banner" className = "banner">
        <div className = "navBarLogin">
            <img className = "piclogo" onClick={() => {navigate('/UserSportsbook')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
            <div className = "myBetsButton"><button onClick={() => {navigate('/MyBets')}}> My Bets</button> </div>
            <div><button type="button" onClick={setUser ? logOut : () => navigate('/')}>LogOut</button> </div>
            <h3>{user ? user.name : ""} {user ? user.balance.toFixed(2) : ""}</h3>
        </div>
    </div>
    
)
}


export default UserNavBar;