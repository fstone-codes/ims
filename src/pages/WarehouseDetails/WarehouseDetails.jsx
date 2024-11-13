import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
// import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
// import editIcon from "../../assets/Icons/edit-24px.svg";
// import editWhiteIcon from "../../assets/Icons/edit-white-24px.svg";

function WarehouseDetails() {
    const [singleWarehouse, getSingleWarehouse] = useState(null);
    const { warehouseId } = useParams();

    // const id = warehouseId ?? singleWarehouse.id;

    async function getSingleWarehouseData() {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);

            getSingleWarehouse(data);
        } catch (error) {
            console.error("Error fetching single warehouse details");
        }
    }

    useEffect(() => {
        getSingleWarehouseData();
    }, []);

    if (!singleWarehouse) {
        <div>Loading warehouse details...</div>;
    }

    return (
        <>
            <section className="title">
                {/* <img src={arrowBackIcon} alt="arrow back icon" /> */}
                <h1 className="title__header">{singleWarehouse.warehouse_name}</h1>
                {/* <img src={editWhiteIcon} alt="edit icon" /> */}
            </section>
            <section className="wh-details">
                <div className="wh-details__container wh-details__container--top-left">
                    <h2 className="wh-details__label">WAREHOUSE ADDRESS:</h2>
                    <p className="wh-details__text">
                        <span className="wh-details__text wh-details__text--span">
                            {singleWarehouse.address}
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
                        <div className="inv__container">
                            <h2 className="inv__label">INVENTORY ITEM</h2>
                            <p className="inv__text">to be replaced</p>
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
                        {/* <img src={deleteIcon} alt="delete icon" />
                    <img src={editIcon} alt="edit icon" /> */}
                    </li>
                </ul>
            </section>
        </>
    );
}

export default WarehouseDetails;
