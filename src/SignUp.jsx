import { useNavigate } from "react-router-dom";

function SignUp (){
    let navigate = useNavigate();
    return(
        <>
        <div>
        <img onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
        <form>
            <div> Create a FanMade Sportsbook Account</div>
            <label>  Name: <input type="text" name="Name" /></label>  
            <label>  Email Address: <input type="text" name="Email Address" /></label>  
            <label>  Password: <input type="text" name="Password" /></label> 
            <label>  Confirm Password: <input type="text" name="Confirm Password" /></label> 
            <input type="Submit" value="Create Account" />
        </form>
        <button onClick={() => {navigate('/Login')}} href="/Login">Login Instead</button>
        
        </div>
        </>
    )

}
export default SignUp;