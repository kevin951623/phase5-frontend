import Odds from "./Odds";
import {useState} from "react";

const BetSlip = ({betSlip, setBetSlip, totalOdds, setTotalOdds,user}) => {

    const [betAmount, setBetAmount] = useState(0)
   

    const handleInputBet = (event) => {
        setBetAmount(event.target.value)
    };

    const payout = ((betAmount * totalOdds)/100);
    
    const handleCreateBet = () => {
        const updatedBalance = (user.balance - payout);
            fetch('/bets', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "user_id": user.id,
                "bet_amount": betAmount,
                "payout": payout
            })
            })
            .then(response => {
              if (response.ok) {
                console.log('Data posted successfully!');
              } else {
                console.error('Error posting data.');
              }
            });

            fetch(`/users/${user.id}}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "balance": updatedBalance
              })
            })
            .then(response => {
              if (response.ok) {
                console.log('Data patched successfully!');
                window.location.reload(); 
              } else {
                console.error('Error patching data.');
              }
            });
          };

    return (
    <div>
        <div className="BetSlip-Container">
            <div>
            {betSlip.map((displayOdds)=> {
            return <Odds    displayOdds={displayOdds}  
                            betSlip={betSlip} 
                            setBetSlip={setBetSlip}
                            totalOdds={totalOdds}
                            setTotalOdds={setTotalOdds}/>
            })}
            </div>
           
        </div>
        <div>
            <div>Total Odds: {totalOdds}</div>
            <div>Bet Amount:<input type="number" value={betAmount} onChange={handleInputBet}/></div>
            <div>Payout:{payout.toFixed(2)}</div>
            <button onClick={handleCreateBet}>Bet</button>
        </div>
    </div>
    )
}
export default BetSlip


  // function calculateOdds({displayOdds}){
    //    for (let i =0; i<displayOdds.length;i++){
    //        if(displayOdds.odd>0){
    //            totalOdd += (displayOdds.odd * 1.5)
    //        }
    //        else if(displayOdds.odd<0){
    //            totalOdd += (displayOdds.odd * .5)
    //        }    
   
    //    }}