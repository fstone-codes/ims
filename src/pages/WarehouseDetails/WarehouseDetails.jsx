import "./WarehouseDetails.scss";

function WarehouseDetails() {
    return (
        <>
            <section className="wh-details">
                <div className="wh-details__container wh-details__container--top-left">
                    <h2 className="wh-details__label">WAREHOUSE ADDRESS:</h2>
                    <p className="wh-details__text">
                        <span className="wh-details__text wh-details__text--span">
                            to be replaced
                        </span>
                        <span className="wh-details__text wh-details__text--span">
                            to be replaced
                        </span>
                    </p>
                </div>
                <div className="wh-details__container">
                    <h2 className="wh-details__label">CONTACT NAME:</h2>
                    <p className="wh-details__text">to be replaced</p>
                    <p className="wh-details__text">to be replaced</p>
                </div>
                <div className="wh-details__container">
                    <h2 className="wh-details__label">CONTACT INFORMATION:</h2>
                    <p className="wh-details__text">to be replaced</p>
                    <p className="wh-details__text">to be replaced</p>
                </div>
            </section>
            <section className="inv">
                <ul className="inv__list">
                    <li className="inv__item">
                        <div className="inv__container">
                            <div className="inv__content-container">
                                <h2 className="inv__label">INVENTORY ITEM</h2>
                                <p className="inv__text">to be replaced</p>
                            </div>
                            <div className="inv__content-container">
                                <h2 className="inv__label">CATEGORY</h2>
                                <p className="inv__text">to be replaced</p>
                            </div>
                        </div>
                        <div className="inv__container">
                            <div className="inv__content-container">
                                <h2 className="inv__label">STATUS</h2>
                                <p className="inv__text">to be replaced</p>
                            </div>
                            <div className="inv__content-container">
                                <h2 className="inv__label">QTY</h2>
                                <p className="inv__text">to be replaced</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default WarehouseDetails;
