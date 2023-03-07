export default function Teams({ displayGames, setBetSlip, betSlip}) {


    const data1 = {odd: displayGames.team1_odds, team: displayGames.team1_name }
    const data2 = {odd: displayGames.team2_odds, team: displayGames.team2_name }
  return (
    <div>

      <div>
        <p>
          Team: {displayGames.team1_name} Score: {displayGames.team1_score} Odds:{" "}
          <button onClick={() => setBetSlip([...betSlip, data1 ])}>
            {console.log(data1)}
            {displayGames.team1_odds} 
          </button>
        </p>
        <p>
          Team: {displayGames.team2_name} Score: {displayGames.team2_score} Odds:{" "}
          <button onClick={() => setBetSlip([...betSlip, data2])}>
            {displayGames.team2_odds}
          </button>
        </p>
      </div>
   

    </div>
  );
}
    