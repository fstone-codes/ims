import "./Header.scss";
import instockLogo from "../../assets/logos/InStock-Logo_2x.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/">
                    <img
                        className="nav__logo"
                        src={instockLogo}
                        alt="InStock logo"
                    />
                </Link>
                <div className="nav__button-wrapper">
                    <NavLink
                        to="/warehouse"
                        className={({ isActive }) => {
                            return isActive
                                ? "nav__link active"
                                : "nav__link";
                        }}
                    >
                        <button className="nav__button">
                            Warehouses
                        </button>
                    </NavLink>
                    <NavLink
                        to="/inventory"
                        className={({ isActive }) => {
                             return isActive
                                ? "nav__link active"
                                : "nav__link";
                        }}
                    >
                        <button className="nav__button">
                            Inventory
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
