import React, { useEffect, useState } from "react";
import "./InventoryAdd.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InventoryAdd = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/inventories");
    };

    const [InventoryData, setInventoryData] = useState({
        warehouse_id: "",
        item_name: "",
        description: "",
        category: "",
        status: "In Stock",
        quantity: "",
    });

    const [inventories, setInventories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const postInventoryData = async (updatedData) => {
        try {
            const { data } = await axios.post(
                `http://localhost:8080/api/inventories`,
                updatedData
            );

            setInventories((prev) => [...prev, data]);
            return true;
        } catch (error) {
            console.error("Error posting inventory data: ", error);
            return false;
        }
    };

    const getInventories = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:8080/api/inventories"
            );

            setInventories(data);
        } catch (error) {
            console.error("Error fetching inventory data: ", error);
        }
    };

    const filteredInventories = [];

    inventories.forEach((item) => {
        if (
            !filteredInventories.some(
                (filteredItem) => filteredItem.category === item.category
            )
        ) {
            filteredInventories.push({ id: item.id, category: item.category });
        }
    });

    const getWarehouse = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:8080/api/warehouses"
            );

            setWarehouses(data);
        } catch (error) {
            console.log("Error fetching warehouses", error);
        }
    };

    useEffect(() => {
        getWarehouse();
        getInventories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInventoryData({
            ...InventoryData,
            [name]: name === "quantity" ? Number(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        // postInventoryData();

        if (
            !InventoryData.item_name ||
            !InventoryData.description ||
            !InventoryData.category ||
            !InventoryData.warehouse_id ||
            (InventoryData.status === "In Stock" && !InventoryData.quantity)
        ) {
            console.error("Missing required fields");
            return;
        }

        if (
            InventoryData.status === "In Stock" &&
            (isNaN(InventoryData.quantity) || InventoryData.quantity <= 0)
        ) {
            console.error("Quantity must be a number");
            return;
        }

        const updatedData = {
            warehouse_id: InventoryData.warehouse_id,
            item_name: InventoryData.item_name,
            description: InventoryData.description,
            category: InventoryData.category,
            status: InventoryData.status,
            quantity:
                InventoryData.status === "In Stock"
                    ? InventoryData.quantity || 0
                    : 0,
        };
        console.log(updatedData);

        const response = await postInventoryData(updatedData);

        if (response) {
            alert("Inventory updated successfully!");
        }
    };

    // //when validating
    // if (InventoryData.status === "In Stock" && !InventoryData.quantity) {
    //     //validation for quantity
    // }

    return (
        <main className="main">
            <div className="title">
                <Link to="/inventory" className="title__link">
                    <img
                        src={backArrow}
                        alt="back arrow"
                        className="title__icon"
                    ></img>
                </Link>
                <h1 className="title__header">Add New Inventory Item</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inventoryform-card">
                    <div className="inventoryform inventoryform--border">
                        <h2 className="inventoryform__title">Item Details</h2>
                        <label
                            htmlFor="inventory_name"
                            className="inventoryform__label"
                        >
                            Item Name
                        </label>
                        <input
                            type="text"
                            name="item_name"
                            id="item_name"
                            placeholder="Item Name"
                            className="inventoryform__input-name"
                            value={InventoryData.item_name}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="description"
                            className="inventoryform__label"
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Please enter a brief item description..."
                            className="inventoryform__input-description"
                            value={InventoryData.description}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="category"
                            className="inventoryform__label"
                        >
                            Category
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="inventoryform__input-category"
                            value={InventoryData.category}
                            onChange={handleChange}
                        >
                            <option value="" >Please select</option>
                            {filteredInventories.map((inventory) => (
                                <option
                                    key={inventory.id}
                                    value={inventory.category}
                                >
                                    {inventory.category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="inventoryform">
                        <h2 className="inventoryform__title">
                            Item Availability
                        </h2>

                        <label className="inventoryform__label">Status</label>
                        <div className="inventoryform__radiobutton">
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="In Stock"
                                    checked={
                                        InventoryData.status === "In Stock"
                                    }
                                    onChange={handleChange}
                                />
                                In Stock
                            </label>
                            <label className="inventoryform__label">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Out of Stock"
                                    checked={
                                        InventoryData.status === "Out of Stock"
                                    }
                                    onChange={handleChange}
                                />
                                Out of Stock
                            </label>
                        </div>

                        {InventoryData.status === "In Stock" && (
                            <label className="inventoryform__label">
                                Quantity
                                <input
                                    type="number"
                                    name="quantity"
                                    className="inventoryform__input-quantity"
                                    value={InventoryData.quantity}
                                    onChange={handleChange}
                                />
                                {formSubmitted && !InventoryData.quantity && (
                                    <span className="warning">
                                        Quantity is required.
                                    </span>
                                )}
                            </label>
                        )}
                        <label className="inventoryform__label">
                            Warehouse
                            <select
                                name="warehouse_id"
                                id="warehouse"
                                className="inventoryform__input-warehouse"
                                value={InventoryData.warehouse_id}
                                onChange={handleChange}
                            >
                                <option value="">Select Warehouse</option>
                                {warehouses.map((warehouse) => (
                                    <option
                                        key={warehouse.id}
                                        value={warehouse.id}
                                    >
                                        {warehouse.warehouse_name}
                                    </option>
                                ))}
                            </select>
                            {formSubmitted && !InventoryData.warehouse_id && (
                                <span className="warning">
                                    Warehouse is required
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="inventoryform__buttons">
                        <button
                            type="button"
                            className="inventoryform__button-cancel"
                            onClick={handleNavigation}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inventoryform__button-add"
                        >
                            + Add Item
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default InventoryAdd;
