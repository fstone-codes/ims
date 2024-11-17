import { useEffect, useState } from "react";
// maintain the same styling for both Add + Edit Inventory pages
import "../InventoryAdd/InventoryAdd.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function InventoryEdit() {
    const { inventoryId } = useParams();
    const navigate = useNavigate();
    const [warehouses, setWarehouses] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        warehouse_id: "",
        warehouse_name: "",
        item_name: "",
        description: "",
        category: "",
        status: "In Stock",
        quantity: "",
    });

    const getInventories = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/inventories");

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
            console.log(warehouses);
        } catch (error) {
            console.error("Error fetching warehouses", error);
        }
    };

    const getSingleItemData = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/inventories/${inventoryId}`
            );

            console.log(data);

            setFormData({
                warehouse_id: "",
                warehouse_name: data.warehouse_name,
                item_name: data.item_name,
                description: data.description,
                category: data.category,
                status: data.status,
                quantity: data.quantity,
            });
        } catch (error) {
            console.error("Error fetching single inventory item: ", error);
        }
    };

    const editSingleItemData = async (updatedData) => {
        try {
            const { warehouse_name, ...nameRemovedData } = updatedData;

            const { data } = await axios.put(
                `http://localhost:8080/api/inventories/${inventoryId}`,
                nameRemovedData
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
            [name]: name === "quantity" || name === "warehouse_name" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        console.log(updatedData);

        if (!validateForm()) {
            return;
        }
        try {
            await editSingleItemData(updatedData);

            navigate(`/inventory/${inventoryId}`);
        } catch (error) {
            console.error("Error updating inventory: ", error);
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
            !formData.warehouse_name ||
            (formData.status === "In Stock" && !formData.quantity)
        ) {
            console.error("Missing required fields");
            return false;
        }

        if (
            formData.status === "In Stock" &&
            (isNaN(formData.quantity) || formData.quantity <= 0)
        ) {
            console.error("Quantity must be a number");
            return false;
        }

        return true;
    };

    const updatedData = {
        warehouse_id:
            warehouses.find((warehouse) => warehouse.warehouse_name === formData.warehouse_name)
                ?.id || "",
        warehouse_name: formData.warehouse_name,
        item_name: formData.item_name,
        description: formData.description,
        category: formData.category,
        status: formData.status,
        quantity: formData.status === "In Stock" ? formData.quantity || 0 : 0,
    };

    console.log(warehouses);

    const uniqueWarehouses = [
        ...new Map(warehouses.map((item) => [item.warehouse_name, item])).values(),
    ].filter((warehouse) => warehouse.warehouse_name !== formData.warehouse_name);

    if (warehouses.length === 0 || !formData) {
        return <div>Loading item...</div>;
    }

    console.log(uniqueWarehouses);

    return (
        <main className="main-inv-add">
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
                            className={`inventoryform__input-name ${
                                formSubmitted && !formData.item_name
                                    ? "inventoryform__input-name--error"
                                    : ""
                            }`}
                            value={formData.item_name}
                            onChange={handleChange}
                        />
                        {formSubmitted && !formData.item_name && (
                            <div className="inventoryform__error-message">
                                <img
                                    src={errorIcon}
                                    alt="Error icon"
                                    className="inventoryform__error-message-icon"
                                />
                                <span>This field is required</span>
                            </div>
                        )}
                        <label htmlFor="description" className="inventoryform__label">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Please enter a brief item description..."
                            className={`inventoryform__input-description ${
                                formSubmitted && !formData.description
                                    ? "inventoryform__input-description--error"
                                    : ""
                            }`}
                            value={formData.description}
                            onChange={handleChange}
                        />
                        {formSubmitted && !formData.description && (
                            <div className="inventoryform__error-message">
                                <img
                                    src={errorIcon}
                                    alt="Error icon"
                                    className="inventoryform__error-message-icon"
                                />
                                <span>This field is required</span>
                            </div>
                        )}
                        <div className="inventoryform__dropdown-wrapper">
                            <label htmlFor="category" className="inventoryform__label">
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                className={`inventoryform__input-category ${
                                    formSubmitted && !formData.category
                                        ? "inventoryform__input-category--error"
                                        : ""
                                }`}
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
                            {formSubmitted && !formData.category && (
                                <div className="inventoryform__error-message inventoryform__error-message--dropdown">
                                    <img
                                        src={errorIcon}
                                        alt="Error icon"
                                        className="inventoryform__error-message-icon"
                                    />
                                    <span>This field is required</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="inventoryform">
                        <h2 className="inventoryform__title">Item Availability</h2>
                        <label className="inventoryform__label">Status</label>
                        <div className="inventoryform__radiobutton">
                            <label
                                className={`inventoryform__label ${
                                    formData.status === "In Stock"
                                        ? "inventoryform__label--selected"
                                        : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="status"
                                    value="In Stock"
                                    checked={formData.status === "In Stock"}
                                    onChange={handleChange}
                                />
                                In Stock
                            </label>
                            <label
                                className={`inventoryform__label ${
                                    formData.status === "Out of Stock"
                                        ? "inventoryform__label--selected"
                                        : ""
                                }`}
                            >
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
                            <div className="inventoryform__dropdown-wrapper">
                                <label htmlFor="quantity" className="inventoryform__label">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    className={`inventoryform__input-quantity ${
                                        formSubmitted && !formData.quantity
                                            ? "inventoryform__input-quantity--error"
                                            : ""
                                    }`}
                                    value={formData.quantity}
                                    onChange={handleChange}
                                />
                                {formSubmitted && !formData.quantity && (
                                    <div className="inventoryform__error-message">
                                        <img
                                            src={errorIcon}
                                            alt="Error icon"
                                            className="inventoryform__error-message-icon"
                                        />
                                        <span>This field is required</span>
                                    </div>
                                )}
                            </div>
                        )}
                        <label htmlFor="warehouse" className="inventoryform__label">
                            Warehouse
                        </label>
                        <select
                            name="warehouse_name"
                            id="warehouse"
                            className={`inventoryform__input-warehouse ${
                                formSubmitted && !formData.warehouse_name
                                    ? "inventoryform__input-warehouse--error"
                                    : ""
                            }`}
                            value={formData.warehouse_name}
                            onChange={handleChange}
                        >
                            <option value="">
                                {formData.warehouse_name || "Select Warehouse"}
                            </option>
                            {uniqueWarehouses.map((warehouse) => (
                                <option key={warehouse.id} value={warehouse.id}>
                                    {warehouse.warehouse_name}
                                </option>
                            ))}
                        </select>
                        {formSubmitted && !formData.warehouse_name && (
                            <div className="inventoryform__error-message inventoryform__error-message--dropdown">
                                <img
                                    src={errorIcon}
                                    alt="Error icon"
                                    className="inventoryform__error-message-icon"
                                />
                                <span>This field is required</span>
                            </div>
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
