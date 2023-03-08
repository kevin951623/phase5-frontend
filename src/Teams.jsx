export default function Teams({ displayGames, setBetSlip, betSlip,totalOdds, setTotalOdds}) {

    const handleClick1 = (displayGames) => {
        setBetSlip([...betSlip, data1 ])
        setTotalOdds(totalOdds + displayGames.team1_odds)
    }
    const handleClick2 = (displayGames) => {
        setBetSlip([...betSlip, data2 ])
        setTotalOdds(totalOdds + displayGames.team2_odds)
    }


    const data1 = {odd: displayGames.team1_odds, team: displayGames.team1_name }
    const data2 = {odd: displayGames.team2_odds, team: displayGames.team2_name }
  return (
    <div>

      <div>
        <p>
          Team: {displayGames.team1_name} Score: {displayGames.team1_score} Odds:{" "}
          <button onClick={() => handleClick1(displayGames)}>
            {/* {console.log(data1)} */}
            {displayGames.team1_odds} 
          </button>
        </p>
        <p>
          Team: {displayGames.team2_name} Score: {displayGames.team2_score} Odds:{" "}
          <button onClick={() => handleClick2(displayGames)}>
            {displayGames.team2_odds}
          </button>
        </p>
      </div>
   

    </div>
  );
}
    