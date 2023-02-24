import { useNavigate } from "react-router-dom";
import NavBar from "./GuestNavBar";

function Home(){
    let navigate = useNavigate();
    return (
        <div className="home">
            
            <NavBar/>
            <video className="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="FanMadeSportsbookVideo.mp4" type="video/mp4" /> 
            </video>
            <div id = "enterButton">
                       <button onClick={() => {navigate('/GuestSportsbook')}}> Enter </button>

            </div>
        </div>
        
    )

}

export default Home;