import "./Header.scss";
import instockLogo from "../../assets/logos/InStock-Logo_2x.png"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img 
                className="nav__logo"
                src={instockLogo} 
                alt="InStock logo" 
                />
                <ul className="nav__list">
                    <li className="nav__item">Warehouses</li>
                    <li className="nav__item">Inventory</li>
                </ul>
            </nav>
        </header>
    )
};
