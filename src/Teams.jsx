export default function Teams({ displayGames, setBetSlip, betSlip,totalOdds, setTotalOdds, gameID}) {

  const handleClick1 = (displayGames) => {
      setBetSlip([...betSlip, data1 ])
      setTotalOdds(totalOdds + displayGames.team1_odds)
  }
  const handleClick2 = (displayGames) => {
      setBetSlip([...betSlip, data2 ])
      setTotalOdds(totalOdds + displayGames.team2_odds)
  }
 
  // console.log(displayGames)

  const data1 = {odd: displayGames.team1_odds, team: displayGames.team1_name }
  const data2 = {odd: displayGames.team2_odds, team: displayGames.team2_name }
return (
  <div classname="Games" >
     <p>Game: {gameID}</p>
    <div>
      <p>
        Team 1: {displayGames.team1_name} Score: {displayGames.team1_score} Odds:{" "}
        <button onClick={() => handleClick1(displayGames)}>
          {displayGames.team1_odds} 
        </button>
      </p>
      <p>
        Team 2: {displayGames.team2_name} Score: {displayGames.team2_score} Odds:{" "}
        <button onClick={() => handleClick2(displayGames)}>
          {displayGames.team2_odds}
        </button>
      </p>
    </div>
  </div>
);
}
