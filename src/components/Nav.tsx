import "./Nav.scss";
import logo from "../assets/logo-travel.png";

export default function Nav() {
    return (
        <nav>
            {/* Navbar header */}
            <a href="#home" className="nav--header">
                <img className="nav--logo" src={logo} alt="World Logo" />
                <h4 className="nav--title">Huey's Travel Journal</h4>
            </a>

            {/* Burger icon */}
            <div>
                <input type="checkbox" id="burger-toggle" />
                <label htmlFor="burger-toggle" id="burger" className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                {/* Navbar menu */}
                <div id="navbar--menu">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#aboutme">About me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
