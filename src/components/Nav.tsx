import "./App.scss";

export default function Nav() {
    return (
        <nav>
            <img
                className="nav--logo"
                src="./src/assets/worldLogo.svg"
                alt="World Logo"
            />
            <h4 className="nav--title">Huey's Travel Journal</h4>
        </nav>
    );
}
