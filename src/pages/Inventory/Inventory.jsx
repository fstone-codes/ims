import "./Inventory.scss";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function Inventory() {

    return (
        <main className="main">
            <section className="inventory">
                <h1 className="inventory__title">Inventory</h1>
                <article className="inventory__CTA-field-container">
                    <div className="field-wrapper">
                        <input 
                        className="input-field" 
                        type="text" 
                        placeholder="Search..." 
                        />
                        <img 
                        className="field-icon" 
                        src={searchIcon}
                        alt="Search icon"
                        />
                    </div>
                    {/* add onclick handler */}
                    <button className="button">+Add New item</button>
                </article>
                <ul className="inventory__table">
                    <li className="inventory__row-entry">
                        <article className="inventory__col-entry">
                            <div className="col">
                                <h4 className="col__header">INVENTORY ITEM</h4>
                                <img className="col__header-img" src={sortIcon} alt="Sort icon" />
                            </div>
                            <Link>
                                <p className="body-small"></p>
                                <img 
                                className="table-icon" 
                                src="" 
                                alt="Blue right chevron" />
                            </Link>
                        </article>
                        <article className="inventory__col-entry">
                            <div className="col">
                                <h4 className="col__header"></h4>
                                <img className="col__header-img" src="" alt="Sort icon" />
                            </div>
                            
                        </article>
                        <article className="inventory__col-entry">
                            <div className="col">
                                <h4 className="col__header"></h4>
                                <img className="col__header-img" src="" alt="Sort icon" />
                            </div>
                            
                        </article>
                        <article className="inventory__col-entry">
                            <div className="col">
                                <h4 className="col__header"></h4>
                                <img className="col__header-img" src="" alt="Sort icon" />
                            </div>
                            
                        </article>
                        <article className="inventory__col-entry">
                            <div className="col">
                                <h4 className="col__header"></h4>
                                <img className="col__header-img" src="" alt="Sort icon" />
                            </div>
                            
                        </article>
                        <article className="inventory__col-entry inventory__col-entry--last">
                            <h4 className="table-header"></h4>
                            <div className="">

                            </div>
                        </article>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Inventory;