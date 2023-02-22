import { useNavigate } from "react-router-dom";

function Home(){
    let navigate = useNavigate();
    return (
        <>
            <button onClick={() => {navigate('/Sportsbook')}} className = "Enter"> Enter </button>

            <video class="video" muted autoPlay={"autopnpmlay"} preload="auto" loop>
            <source src="FanMadeSportsbookVideo.mp4" type="video/mp4" />
            </video>
        </>
        
    )

}

export default Home;