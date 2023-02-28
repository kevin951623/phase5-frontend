import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"

function UserNavBar(){
    let navigate = useNavigate();
    const [users, setUsers] = useState([])

    const fetchUsers= async () => {
            const req = await fetch('http://localhost:3000/users')
            const res = await req.json()

            setUsers(res)
            console.log(res)
        }
    useEffect(() => {
        fetchUsers()
    }, [])

return(
    <div id="banner" className = "banner">
        <div className = "navBarLogin">
            <img className = "piclogo" onClick={() => {navigate('/')}} src="./FanMadeLogo.png" alt="fanmadelogo" href="/"/> 
            <div className = "Users"></div>
            <div className = "logOutButton">
            <button onClick={() => {navigate('/')}}> LogOut</button>
            </div>
        </div>
        
        
    </div>
    
)
}

export default UserNavBar;