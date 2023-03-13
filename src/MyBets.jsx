import {useState,useEffect} from "react";

function MyBets ({user}){

    const [userBets, setUserBets] = useState("")

    useEffect(() => {
    const fetchUserWithBets = async () => {
        const req = await fetch(`/users/${user.id}}`)
        const res = await req.json()
        setUserBets(res)
    }
  fetchUserWithBets()}, []);
  

    return(
        <div>
           <p>{userBets.name}</p>
           <div>
                {userBets?.bets?.map((bet)=> {
                return <p>Bet Amount: {bet.bet_amount} Payout: {bet.payout}</p>
                })}
            </div> 
        </div>
    )

}
export default MyBets;

