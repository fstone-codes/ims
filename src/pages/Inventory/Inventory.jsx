import { Link } from "react-router-dom";

export default function Inventory() {

    return (
        <main className="inventory">
            <h1 className="inventory__title">Inventory</h1>
            <article className="inventory__CTA-field-container">
                <div className="field-wrapper">
                    <img 
                    className="field-icon" 
                    src=""
                    alt="Search icon"
                    />
                    <input className="input-field" type="text" placeholder="Search..." />
                </div>
                <button className="button">
                    <Link>+Add New item</Link>
                </button>
            </article>
            <ul className="inventory__table">
                <li className="inventory__row-entry">
                    <article className="inventory__col-entry">
                        <div className="col">
                            <h4 className="col__header"></h4>
                            <img className="col__header-img" src="" alt="Sort icon" />
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
        </main>
    )
}