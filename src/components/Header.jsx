import { Link } from "react-router-dom"

function Header() {
    function resetButtons(e) {
        const list = Array.from(document.getElementsByTagName('button'))
        list.forEach(button => {
            button.className = "unpressed"
        })
    }
    return <div>
        <h1>Welcome to Nc-News <Link to ="/" >
            <button id="home-button" onClick={resetButtons}>home</button>
        </Link>
        <Link to='/login'>
            <button id="login-button">login</button>
        </Link></h1>
    </div>
}

export default Header