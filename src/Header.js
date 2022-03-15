import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            {/* wrap h1 in a Router link which navigates back to the homepage */}
            <Link to="/">
                <h1>Hackflix</h1>
            </Link>
        </header>
    )
}

export default Header;