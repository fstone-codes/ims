import React from "react";
import { Link } from "react-router-dom";
import "./warehouse.scss";
import axios from "axios";
import warehouse__sortIcon from "../../assets/Icons/sort-24px.svg";
import warehouse__chevron from "../../assets/Icons/chevron_right-24px.svg";
import warehouse__deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import warehouse__editIcon from "../../assets/Icons/edit-24px.svg";
import { useState, useEffect } from "react";

function Warehouse() {
    const [warehouses, setWarehouses] = useState([]);
    async function getAllWarehouseData() {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/warehouses`
            );

            setWarehouses(data);
        } catch (error) {
            console.error("Error fetching all warehouses");
        }
    }

    useEffect(() => {
        getAllWarehouseData();
    }, []);

    if (!warehouses) {
        return <div>Loading Warehouses...</div>;
    }
    return (
        <main className="main">
            <div className="warehouse">
                <div className="warehouse__header">
                    <h1 className="warehouse__heading">Warehouses</h1>
                    <div className="warehouse__search-container">
                        {" "}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="warehouse__search"
                        />
                        <button className="warehouse__add-warehouse-button">
                            +Add New Warehouse
                        </button>
                    </div>
                </div>

                <section className="warehouse-list__items">
                    {warehouses.map((warehouse, index) => (
                        <li key={warehouse.id} className="warehouse-list__item">
                            <div className="warehouse-list__table-components">
                                <div className="warehouse-list__content">
                                    <p className="warehouse-list__label">
                                        WAREHOUSE
                                    </p>
                                    {index === 0 && (
                                        <img
                                            className="warehouse-list__sortIcon"
                                            src={warehouse__sortIcon}
                                            alt="sorticon"
                                        />
                                    )}

                                    <Link
                                        to={`/warehouse/${warehouse.id}`}
                                        className="warehouse-list__link"
                                    >
                                        <p
                                            className="warehouse-list__text"
                                            id="warehousenamecolor"
                                        >
                                            {warehouse.warehouse_name}
                                        </p>
                                        <img
                                            className="warehouse-list__chevron"
                                            src={warehouse__chevron}
                                            alt="sorticon"
                                        />
                                    </Link>
                                </div>
                                <div className="warehouse-list__content">
                                    <p className="warehouse-list__label">
                                        CONTACT NAME
                                    </p>
                                    {index === 0 && (
                                        <img
                                            className="warehouse-list__sortIcon"
                                            src={warehouse__sortIcon}
                                            alt="sorticon"
                                        />
                                    )}
                                    <p className="warehouse-list__text">
                                        {warehouse.contact_name}
                                    </p>
                                </div>
                                <div className="warehouse-list__content">
                                    <p className="warehouse-list__label">
                                        ADDRESS{" "}
                                    </p>
                                    {index === 0 && (
                                        <img
                                            className="warehouse-list__sortIcon"
                                            src={warehouse__sortIcon}
                                            alt="sorticon"
                                        />
                                    )}
                                    <p className="warehouse-list__text">
                                        {warehouse.address} <br />
                                        {warehouse.city} {", "}
                                        {warehouse.country}
                                    </p>
                                </div>
                                <div className="warehouse-list__content">
                                    <p className="warehouse-list__label">
                                        CONTACT INFORMATION
                                    </p>
                                    {index === 0 && (
                                        <img
                                            className="warehouse-list__sortIcon"
                                            src={warehouse__sortIcon}
                                            alt="sorticon"
                                        />
                                    )}
                                    <p className="warehouse-list__text">
                                        {warehouse.contact_phone} <br />
                                        {warehouse.contact_email}
                                    </p>
                                </div>
                            </div>
                            <div className="warehouse-list__content warehouse-list__action">
                                <div
                                    className="warehouse-list__label"
                                    id="action-label"
                                >
                                    ACTION
                                </div>
                                <div className="warehouse-list__icon-container">
                                    <img
                                        className="warehouse-list__icon"
                                        src={warehouse__deleteIcon}
                                        alt="delete icon"
                                    />
                                    <img
                                        className="warehouse__icon"
                                        src={warehouse__editIcon}
                                        alt="edit icon"
                                    />
                                </div>
                            </div>

                        </li>
                    ))}
                </section>
            </div>
        </main>
    );
}

export default Warehouse;
