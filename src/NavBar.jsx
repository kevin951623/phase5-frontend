import { useNavigate } from "react-router-dom";

function NavBar(){
    let navigate = useNavigate();
return(
    <div className = "banner">
        <div className = "logo">
            <img onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
        </div>
        <button onClick={() => {navigate('/login')}} className = "Cart"> LogIn </button>
        
    </div>
    
)
}

export default NavBar;