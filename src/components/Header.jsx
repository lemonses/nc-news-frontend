import { Link } from "react-router-dom"

function Header() {
    return <div>
        <h1>Welcome to Nc-News</h1>
        <Link to ="/">
            <button>home</button>
        </Link>
    </div>
}

export default Header