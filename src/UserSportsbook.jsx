//import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import Teams from "./Teams";
import BetSlip from "./BetSlip";


let gameNumber = 1;

function UserSportsbook ({user,setUser}) {
    const [game, setGame] = useState([]);
    const [betSlip, setBetSlip] = useState([]);
    const [totalOdds, setTotalOdds] = useState(0);
   
   
    // setTotalOdds(totalOdds + displayOdds.odd)

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
                {game.map((displayGames, i)=> {
                return <Teams displayGames={displayGames} 
                                setBetSlip={setBetSlip} 
                                betSlip={betSlip} 
                                totalOdds={totalOdds}
                                setTotalOdds={setTotalOdds}
                                gameID={gameNumber + i}
                               
                                />
                })}
            </div>
            <div className="betslip">
                Bet Slip:
              <BetSlip  betSlip={betSlip} 
                        setBetSlip={setBetSlip}
                        totalOdds={totalOdds}
                        setTotalOdds={setTotalOdds}
                        user={user}
                        setUser={setUser}
                        gameID={gameNumber}
                        
                        />
            </div>
           
        </div>
    )

}
export default UserSportsbook;