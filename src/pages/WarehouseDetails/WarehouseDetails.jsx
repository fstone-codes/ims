import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import editWhiteIcon from "../../assets/Icons/edit-white-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

function WarehouseDetails() {
    const [singleWarehouse, setSingleWarehouse] = useState(null);
    const { warehouseId } = useParams();

    // const id = warehouseId ?? singleWarehouse.id;

    async function getSingleWarehouseData() {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);

            setSingleWarehouse(data);
        } catch (error) {
            console.error("Error fetching single warehouse details");
        }
    }

    useEffect(() => {
        getSingleWarehouseData();
    }, [warehouseId]);

    if (!singleWarehouse) {
        <div>Loading warehouse details...</div>;
    }

    return (
        <main className="main">
            <section className="title">
                <div className="title__container">
                    <img className="title__back-icon" src={arrowBackIcon} alt="arrow back icon" />
                    <h1 className="title__header">{singleWarehouse.warehouse_name}</h1>
                </div>
                <div className="title__icon-container">
                    <img className="title__edit-icon" src={editWhiteIcon} alt="edit icon" />
                </div>
            </section>
            <section className="wh-details">
                <div className="wh-details__container wh-details__container--top-left">
                    <h2 className="wh-details__label">WAREHOUSE ADDRESS:</h2>
                    <p className="wh-details__text">
                        <span className="wh-details__text wh-details__text--span">
                            {`${singleWarehouse.address}, `}
                        </span>
                        <span className="wh-details__text wh-details__text--span">
                            {singleWarehouse.city}, {singleWarehouse.country}
                        </span>
                    </p>
                </div>
                <div className="wh-details__container">
                    <h2 className="wh-details__label">CONTACT NAME:</h2>
                    <p className="wh-details__text">{singleWarehouse.contact_name}</p>
                    <p className="wh-details__text">{singleWarehouse.contact_position}</p>
                </div>
                <div className="wh-details__container">
                    <h2 className="wh-details__label">CONTACT INFORMATION:</h2>
                    <p className="wh-details__text">{singleWarehouse.contact_phone}</p>
                    <p className="wh-details__text">{singleWarehouse.contact_email}</p>
                </div>
            </section>
            <section className="inv">
                <ul className="inv__list">
                    <li className="inv__item">
                        <div className="inv__item-container">
                            <div className="inv__container">
                                <h2 className="inv__label">INVENTORY ITEM</h2>
                                <p className="inv__text inv__text--blue">
                                    to be replaced
                                    <span>
                                        <img
                                            className="inv__chevron-icon"
                                            src={chevronIcon}
                                            alt="chevron right icon"
                                        />
                                    </span>
                                </p>
                            </div>
                            <div className="inv__container">
                                <h2 className="inv__label">CATEGORY</h2>
                                <p className="inv__text">to be replaced</p>
                            </div>
                            <div className="inv__container">
                                <h2 className="inv__label">STATUS</h2>
                                <p className="inv__text">to be replaced</p>
                            </div>
                            <div className="inv__container">
                                <h2 className="inv__label">QTY</h2>
                                <p className="inv__text">to be replaced</p>
                            </div>
                        </div>
                        <div className="inv__icon-container">
                            <img className="inv__icon" src={deleteIcon} alt="delete icon" />
                            <img className="inv__icon" src={editIcon} alt="edit icon" />
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default WarehouseDetails;
