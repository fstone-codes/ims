import "./WarehouseDetails.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editWhiteIcon from "../../assets/Icons/edit-white-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function WarehouseDetails() {
    const [singleWarehouse, setSingleWarehouse] = useState(null);
    const [warehouseInventory, setWarehouseInventory] = useState(null);
    const { warehouseId } = useParams();

    async function getSingleWarehouseData() {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);

            setSingleWarehouse(data);
        } catch (error) {
            console.error("Error fetching single warehouse details");
        }
    }

    async function getWarehouseInventoryData() {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/warehouses/${warehouseId}/inventories`
            );

            setWarehouseInventory(data);
        } catch (error) {
            console.error("Error fetching warehouse inventory details");
        }
    }

    useEffect(() => {
        getSingleWarehouseData();
        getWarehouseInventoryData();
    }, [warehouseId]);

    if (!singleWarehouse) {
        return <div>Loading warehouse details...</div>;
    }

    if (!warehouseInventory) {
        return <div>Loading warehouse inventory details...</div>;
    }

    return (
        <main className="main">
            <section className="title">
                <div className="title__container">
                    <Link className="title__link" to={"/warehouse"}>
                        <img
                            className="title__back-icon"
                            src={arrowBackIcon}
                            alt="arrow back icon"
                        />
                    </Link>
                    <h1 className="title__header">{singleWarehouse.warehouse_name}</h1>
                </div>
                <Link className="title__icon-container" to={`/warehouse/${warehouseId}/edit`}>
                    <img className="title__edit-icon" src={editWhiteIcon} alt="edit icon" />
                    <p className="title__edit-text">Edit</p>
                </Link>
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
                <div className="inv__td-container">
                    <div className="inv__td-content">
                        <p className="inv__td-label">INVENTORY ITEM</p>
                        <img className="inv__td-icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inv__td-content">
                        <p className="inv__td-label">CATEGORY</p>
                        <img className="inv__td-icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inv__td-content">
                        <p className="inv__td-label">STATUS</p>
                        <img className="inv__td-icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inv__td-content">
                        <p className="inv__td-label">QUANTITY</p>
                        <img className="inv__td-icon" src={sortIcon} alt="sort icon" />
                    </div>
                    <div className="inv__td-content inv__td-content--right">
                        <p className="inv__td-label">ACTIONS</p>
                    </div>
                </div>
                <ul className="inv__list">
                    {warehouseInventory.map((item) => (
                        <InventoryItem
                            key={item.id}
                            name={item.item_name}
                            category={item.category}
                            status={item.status}
                            quantity={item.quantity}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default WarehouseDetails;
