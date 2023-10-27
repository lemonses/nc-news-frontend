import { useContext } from "react"
import { UserContext } from "../contexts/User"
import { Link,useNavigate } from "react-router-dom" 

function Login () {
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    function loginUser(e) {
        setUser(e.target.innerText)
        navigate(-1)
    }

    return <div>
        <p>Choose which user to login as</p>
        <button onClick={loginUser}>tickle122</button>
        <button onClick={loginUser}>grumpy19</button>
        <button onClick={loginUser}>happyamy2016</button>
        <button onClick={loginUser}>cooljmessy</button>
        <button onClick={loginUser}>weegembump</button>
        <button onClick={loginUser}>jessjelly</button>
    </div>
}

export default Login