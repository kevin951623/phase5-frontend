
function Odds({ displayOdds, betSlip, setBetSlip }) {
  const removeFromBetSlip = (index) => {
    const newBetSlip = [...betSlip];
    newBetSlip.splice(index, 1);
    setBetSlip(newBetSlip);
  };

  return (
    <div>
      <p>{displayOdds.team}</p>
      <p>{displayOdds.odd}</p>
      <button onClick={() => removeFromBetSlip(betSlip.indexOf(displayOdds))}>Remove</button>
    </div>
  );
}

export default Odds;

function oddsTotal({displayOdds}){
    const oddsTotal = displayOdds.reduce((total, odds) => total + odds.odd, 0);
    
    return(
      <div>
        <p>{displayOdds.team}</p>
        <p>{oddsTotal}</p>
      </div>
    )
  }