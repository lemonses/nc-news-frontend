import { addVotes } from "../api/api"
import { useEffect, useState } from "react"

function Voter ({votes,article_id}) {
    const [currVotes,setCurrVotes] = useState(votes)
    const [userVote,setUserVote] = useState('0')
    const [error,setError] = useState(false)
    const [isPlusPressed, setIsPlusPressed] = useState('unpressed')
    const [isMinusPressed, setIsMinusPressed] = useState('unpressed')

    let voteCopy = currVotes
    function incVote() {
        if(currVotes === votes){
            voteCopy++
            setCurrVotes(voteCopy)
            setUserVote('1')
            setIsPlusPressed('pressed')
        }else{
            if(currVotes>votes){
                setCurrVotes(votes)
                setUserVote('-1')
                setIsPlusPressed('unpressed')
            }else{
                voteCopy+=2
                setCurrVotes(voteCopy)
                setUserVote('2')
                setIsMinusPressed('unpressed')
                setIsPlusPressed('pressed')
            }
        }   
    }

    function decVote() {
        if(currVotes === votes){
            voteCopy--
            setCurrVotes(voteCopy)
            setUserVote('-1')
            setIsMinusPressed('pressed')
        }else{
            if(currVotes<votes){
                setCurrVotes(votes)
                setUserVote('1')
                setIsMinusPressed('unpressed')
            }else{
                voteCopy-=2
                setCurrVotes(voteCopy)
                setUserVote('-2')
                setIsPlusPressed('unpressed')
                setIsMinusPressed('pressed')
            }
        }
    }

    function checkError() {
        if(error){
            return <p className="error-message">Sorry an error has ocurred please try again</p>
        }
    }

    useEffect(()=>{
        if(userVote !== '0'){
            addVotes(userVote,article_id).catch((err)=>{
                setError(err)
                setUserVote(0)
                setCurrVotes(votes)
                setIsMinusPressed('unpressed')
                setIsPlusPressed('unpressed')
            })
        }
    },[currVotes])
    return <div> 
        <p>votes:{currVotes} <button className={isPlusPressed} onClick={incVote}>+</button> <button className={isMinusPressed} onClick={decVote}>-</button></p>
        {checkError()}
    </div>
}

export default Voter