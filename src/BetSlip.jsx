import Odds from "./Odds";

const BetSlip = ({betSlip, setBetSlip}) => {


    return (
        <div className="BetSlip-Container">
            {betSlip.map((displayOdds)=> {
            return <Odds displayOdds={displayOdds} betSlip={betSlip} setBetSlip={setBetSlip}/>
            })}
        </div>
    )
}
export default BetSlip