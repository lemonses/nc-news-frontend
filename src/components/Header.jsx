import { Link } from "react-router-dom"

function Header() {
    function resetButtons(e) {
        const list = Array.from(document.getElementsByTagName('button'))
        list.forEach(button => {
            button.className = "unpressed"
        })
    }
    return <div>
        <h1>Welcome to Nc-News</h1>
        <Link to ="/">
            <button onClick={resetButtons}>home</button>
        </Link>
    </div>
}

export default Header