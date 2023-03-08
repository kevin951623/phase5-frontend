
function Odds({ displayOdds, betSlip, setBetSlip, totalOdds, setTotalOdds}) {

    const handleClick = (displayOdds) => {
        removeFromBetSlip(betSlip.indexOf(displayOdds))
        setTotalOdds(totalOdds - displayOdds.odd)
    }

    const removeFromBetSlip = (index) => {
    const newBetSlip = [...betSlip];
    newBetSlip.splice(index, 1);
    setBetSlip(newBetSlip);
  };
// console.log(displayOdds.odd);
  return (
    <div>
      <p>{displayOdds.team}</p>
      <p>{displayOdds.odd}</p>
      <button onClick={() => handleClick(displayOdds)}>Remove</button>
    </div>
  );
}

export default Odds;

// function oddsTotal({displayOdds}){
//     const oddsTotal = displayOdds.reduce((total, odds) => total + odds.odd, 0);
    
//     return(
//       <div>
//         <p>{displayOdds.team}</p>
//         <p>{oddsTotal}</p>
//       </div>
//     )
//   }

