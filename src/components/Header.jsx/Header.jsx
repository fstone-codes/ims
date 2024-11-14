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
                <div className="nav__button-wrapper">
                    <NavLink>
                        <button className="nav__button">Warehouses</button>
                    </NavLink>
                    <NavLink>
                        <button className="nav__button">Inventory</button>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
};
