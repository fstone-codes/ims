import { useEffect, useState } from "react";
// maintain the same styling for both pages
import "../InventoryAdd/InventoryAdd.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import dropdownIcon from "../../assets/Icons/arrow_drop_down-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function InventoryEdit() {
    const { inventoryId } = useParams();
    const navigate = useNavigate();
    const [inventories, setInventories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [categoryList, setCategoryList] = useState([]);

    const [formData, setFormData] = useState({
        warehouse_id: "",
        item_name: "",
        description: "",
        category: "",
        status: "In Stock",
        quantity: "",
    });

    const getInventories = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/inventories");

            // setInventories(data);

            const filterOnlyCategories = (arrOfObjects) => {
                return arrOfObjects.map((object) => ({
                    id: object.id,
                    category: object.category,
                }));
            };

            const newArray = filterOnlyCategories(data);

            const removeDuplicateCategories = (arrOfObjects) => {
                const storeUniqueCategories = [];
                return arrOfObjects.filter((object) => {
                    if (storeUniqueCategories.includes(object.category)) {
                        return false;
                    }
                    storeUniqueCategories.push(object.category);
                    return true;
                });
            };

            const uniqueCategories = removeDuplicateCategories(newArray);

            setCategoryList(uniqueCategories);
        } catch (error) {
            console.error("Error fetching inventory data: ", error);
        }
    };

    const getWarehouse = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/warehouses");

            setWarehouses(data);
        } catch (error) {
            console.error("Error fetching warehouses", error);
        }
    };

    const getSingleItemData = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/inventories/${inventoryId}`
            );

            setFormData(data);
        } catch (error) {
            console.error("Error fetching single inventory item: ", error);
        }
    };

    const editSingleItemData = async () => {
        try {
            const { data } = await axios.put(
                `http://localhost:8080/api/inventories/${inventoryId}`,
                updatedData
            );

            getSingleItemData(data);
        } catch (error) {
            console.error("Error editing single inventory item: ", error);
        }
    };

    useEffect(() => {
        getWarehouse();
        getInventories();
    }, []);

    useEffect(() => {
        getSingleItemData();
    }, [inventoryId]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(() => ({
            ...formData,
            [name]: name === "quantity" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        validateForm();

        const response = await editSingleItemData(updatedData);

        if (response) {
            alert("Inventory updated successfully!");
        }
    };

    const handleNavigation = () => {
        navigate("/inventory");
    };

    const validateForm = () => {
        if (
            !formData.item_name ||
            !formData.description ||
            !formData.category ||
            !formData.warehouse_id ||
            (formData.status === "In Stock" && !formData.quantity)
        ) {
            console.error("Missing required fields");
            return;
        }

        if (
            formData.status === "In Stock" &&
            (isNaN(formData.quantity) || formData.quantity <= 0)
        ) {
            console.error("Quantity must be a number");
            return;
        }
    };

    const updatedData = {
        warehouse_id: formData.warehouse_id,
        item_name: formData.item_name,
        description: formData.description,
        category: formData.category,
        status: formData.status,
        quantity: formData.status === "In Stock" ? formData.quantity || 0 : 0,
    };

    if (!formData) {
        return <div>Loading item...</div>;
    }

    return (
        <main className="main">
            <div className="title">
                <Link to="/inventory" className="title__link">
                    <img src={backArrow} alt="back arrow" className="title__icon"></img>
                </Link>
                <h1 className="title__header">Edit Inventory Item</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inventoryform-card">
                    <div className="inventoryform inventoryform--border">
                        <h2 className="inventoryform__title">Item Details</h2>
                        <label htmlFor="item_name" className="inventoryform__label">
                            Item Name
                        </label>
                        <input
                            type="text"
                            name="item_name"
                            id="item_name"
                            placeholder="Item Name"
                            className="inventoryform__input-name"
                            value={formData.item_name}
                            onChange={handleChange}
                        />
                        <label htmlFor="description" className="inventoryform__label">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Please enter a brief item description..."
                            className="inventoryform__input-description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <div className="inventoryform__dropdown-wrapper">
                            <label htmlFor="category" className="inventoryform__label">
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="inventoryform__input-category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">Please select</option>
                                {categoryList.map((uniqueCategory) => (
                                    <option key={uniqueCategory.id} value={uniqueCategory.category}>
                                        {uniqueCategory.category}
                                    </option>
                                ))}
                            </select>
                            <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                        </div>
                    </div>
                    <div className="inventoryform">
                        <h2 className="inventoryform__title">Item Availability</h2>
                        <label className="inventoryform__label">Status</label>
                        <div className="inventoryform__radiobutton">
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="In Stock"
                                    checked={formData.status === "In Stock"}
                                    onChange={handleChange}
                                />
                                In Stock
                            </label>
                            <label className="inventoryform__label">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Out of Stock"
                                    checked={formData.status === "Out of Stock"}
                                    onChange={handleChange}
                                />
                                Out of Stock
                            </label>
                        </div>
                        {formData.status === "In Stock" && (
                            <>
                                <div className="inventoryform__dropdown-wrapper">
                                    <label htmlFor="quantity" className="inventoryform__label">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        className="inventoryform__input-quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                    />
                                    {formSubmitted && !formData.quantity && (
                                        <span className="warning">Quantity is required.</span>
                                    )}
                                    <img
                                        src={dropdownIcon}
                                        alt="Dropdown Icon"
                                        className="dropdown-icon"
                                    />
                                </div>
                            </>
                        )}
                        <label htmlFor="warehouse" className="inventoryform__label">
                            Warehouse
                        </label>
                        <select
                            name="warehouse_id"
                            id="warehouse"
                            className="inventoryform__input-warehouse"
                            value={formData.warehouse_id}
                            onChange={handleChange}
                        >
                            <option value="">Select Warehouse</option>
                            {warehouses.map((warehouse) => (
                                <option key={warehouse.id} value={warehouse.id}>
                                    {warehouse.warehouse_name}
                                </option>
                            ))}
                        </select>
                        {formSubmitted && !formData.warehouse_id && (
                            <span className="warning">Warehouse is required</span>
                        )}
                    </div>

                    <div className="inventoryform__buttons">
                        <button
                            type="button"
                            className="inventoryform__button-cancel"
                            onClick={handleNavigation}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="inventoryform__button-add">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default InventoryEdit;
