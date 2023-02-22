import { useNavigate } from "react-router-dom";

function Login (){
    let navigate = useNavigate();
    return(
        <>
        <div>
        <img onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
        <form>
            <div> Login to FanMade Sportsbook </div>
            <label>  Username: <input type="text" name="Username" /></label>  
            <label>  Password: <input type="text" name="Password" /></label>  
            <input type="Submit" value="Login" />
        </form>
        <button onClick={() => {navigate('/SignUp')}} href="/SignUp">Sign Up</button>
        
        </div>
        </>
    )

}
export default Login;