//import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import Teams from "./Teams";
import BetSlip from "./BetSlip";


function UserSportsbook ({}) {
    const [game, setGame] = useState([]);
    const [betSlip, setBetSlip] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
          const req = await fetch('/games')
          const res = await req.json()
          setGame(res)
      }
    fetchGames()}, []);

    return(
        <div className="Usersport-container">
            
            <div>
                Teams:
                {game.map((displayGames)=> {
                    console.log(displayGames)
                return <Teams displayGames={displayGames} setBetSlip={setBetSlip} betSlip={betSlip}/>
                })}
            </div>
            <div>
                Bet Slip:
              <BetSlip betSlip={betSlip} setBetSlip={setBetSlip}/>
            </div>
        </div>
    )

}
export default UserSportsbook;