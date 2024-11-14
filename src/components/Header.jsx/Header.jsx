import "./Header.scss";
import instockLogo from "../../assets/logos/InStock-Logo_2x.png"
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink>
                    <img 
                    className="nav__logo"
                    src={instockLogo} 
                    alt="InStock logo" 
                    />
                </NavLink>
                <ul className="nav__list">
                    <NavLink>
                        <li className="nav__item">Warehouses</li>
                    </NavLink>
                    <NavLink>
                        <li className="nav__item">Inventory</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
};
