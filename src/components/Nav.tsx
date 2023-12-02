import "./App.scss";
import logo from "../assets/worldLogo.svg";


export default function Nav() {
    return (
        <nav>
            <div className="nav--title">
                <img className="nav--logo" src={logo} alt="World Logo" />
                <h4>Huey's Travel Journal</h4>  
            </div>

            {/* Burger icon */}
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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
