import "./Inventory.scss";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    // handleClick for Add button
    const addHandleClick = () => (navigate("/warehouse/add"));

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
                    <button className="add-button" onClick={addHandleClick}>+Add New item</button>
                </article>
                <ul className="inventory__list">
                    {inventory.map((inventoryItem) => (
                        <li className="inventory__item" key={inventoryItem.id}>
                            <div className="inventory__table-components">
                                <article className="inventory__content">
                                    <h4 className="inventory__label">INVENTORY ITEM</h4>
                                    <Link to="/inventory/:inventoryId">
                                        <p className="inventory__text inventory__text--blue">{inventoryItem.item_name}</p>
                                        <img
                                        className="inventory__chevron-icon"
                                        src={chevronIcon}
                                        alt="chevron right icon"
                                        />
                                    </Link>
                                </article>
                                <article className="inventory__content">
                                    <h4 className="inventory__label">CATEGORY</h4>
                                    <p className="inventory__text">{inventoryItem.category}</p>
                                </article>
                                <article className="inventory__content">
                                    <h4 className="inventory__label">STATUS</h4>
                                    <div className={`inventory__status-wrapper ${inventoryItem.status === "In Stock" ? "in-stock" : "out-of-stock"}`}>
                                        <p className="inventory__text">{inventoryItem.status}</p>
                                    </div>
                                </article>
                                <article className="inventory__content">
                                    <h4 className="inventory__label">QTY</h4>
                                    <p className="inventory__text">{inventoryItem.quantity}</p>
                                </article>
                                <article className="inventory__content">
                                    <h4 className="inventory__label">WAREHOUSE</h4>
                                    <p className="inventory__text">{inventoryItem.warehouse_name}</p>
                                </article>
                            </div>
                            <article className="inventory__icon-container">
                                <img className="inventory__icon" src={deleteIcon} alt="delete icon" />
                                <img className="inventory__icon" src={editIcon} alt="edit icon" />
                            </article>
                        
                        </li>
                    ))}
                    
                </ul>
            </section>
        </main>
    );
}

export default Inventory;