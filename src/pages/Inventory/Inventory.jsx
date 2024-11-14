import "./Inventory.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import editWhiteIcon from "../../assets/Icons/edit-white-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

// const BASE_URL = import.meta.env.VITE_API_URL;

function Inventory() {
    const [inventory, setInventory] = useState([]);
    const [selectedInventory, setSelectedInventory] = useState(null);

    const getInventory = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/inventories");
            const inventoryData = response.data;
            // console.log(inventoryData)
            setInventory(inventoryData);
        } catch (error) {
            console.error("Error fetching inventory data: ", error);
        }
    }

    useEffect(() => {
        getInventory();
    }, []);
    
    return (
        <main className="main">
            <section className="inventory">
                <h1 className="inventory__title">Inventory</h1>
                <article className="inventory__CTA-field-container">
                    {/* <div className="field-wrapper"> */}
                        <input 
                        className="input-field" 
                        type="text" 
                        placeholder="Search..." 
                        />
                        {/* <img 
                        className="field-icon" 
                        src={searchIcon}
                        alt="Search icon"
                        /> */}
                    {/* </div> */}
                    {/* add onclick handler */}
                    <button className="add-button">+Add New item</button>
                </article>
                <ul className="inv__list">
                    {inventory.map((inventoryItem) => (
                        <li className="inv__item" key={inventoryItem.id}>
                        <div className="inv__item-container">
                            <article className="inv__container">
                                <h2 className="inv__label">INVENTORY ITEM</h2>
                                <p className="inv__text inv__text--blue">
                                    {inventoryItem.item_name}
                                    <span className="inv__inline-icon">
                                        <img
                                            className="inv__chevron-icon"
                                            src={chevronIcon}
                                            alt="chevron right icon"
                                        />
                                    </span>
                                </p>
                            </article>
                            <div className="inv__container">
                                <h2 className="inv__label">CATEGORY</h2>
                                <p className="inv__text">{inventoryItem.category}</p>
                            </div>
                            <div className="inv__container">
                                <h2 className="inv__label">STATUS</h2>
                                <div className={`inv__status-wrapper ${inventoryItem.status === "In Stock" ? "in-stock" : "out-of-stock"}`}>
                                    <p className="inv__text">{inventoryItem.status}</p>
                                </div>
                            </div>
                            <div className="inv__container">
                                <h2 className="inv__label">QTY</h2>
                                <p className="inv__text">{inventoryItem.quantity}</p>
                            </div>
                            <div className="inv__container">
                                <h2 className="inv__label">WAREHOUSE</h2>
                                <p className="inv__text">{inventoryItem.warehouse_name}</p>
                            </div>
                            </div>
                            <div className="inv__icon-container">
                                <img className="inv__icon" src={deleteIcon} alt="delete icon" />
                                <img className="inv__icon" src={editIcon} alt="edit icon" />
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </section>
        </main>
    );
}

export default Inventory;