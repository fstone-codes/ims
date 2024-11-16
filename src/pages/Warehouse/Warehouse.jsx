import React from "react";
import { Link } from "react-router-dom";
import "./warehouse.scss";
import axios from "axios";
import warehouse__sortIcon from "../../assets/Icons/sort-24px.svg";
import warehouse__chevron from "../../assets/Icons/chevron_right-24px.svg";
import warehouse__deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import warehouse__searchIcon from "../../assets/Icons/search-24px.svg"
import warehouse__editIcon from "../../assets/Icons/edit-24px.svg";
import { useState, useEffect } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function Warehouse() {
    const [warehouses, setWarehouses] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState(null);

    const handleModalClick = (warehouse) => {
        setItemSelected(warehouse);
        setIsOpen(true);
    };

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

    const handleDeleteClick = async () => {
        if (!itemSelected) return;
        try {
            const response = await axios.delete(
                `http://localhost:8080/api/inventories/${itemSelected.id}`
            );
            setWarehouses((previousWhList) => {
                return previousWhList.filter(
                    (warehouse) => warehouse.id !== itemSelected.id
                );
            });
            setIsOpen(false);
        } catch (error) {
            console.error("Error deleting warehouse: ", error);
        }
    };

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
                        <div className="warehouse__search-subcontainer">
                            {" "}
                            <img
                                className="warehouse-list__searchIcon"
                                src={warehouse__searchIcon}
                                alt="searchicon"
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="warehouse__search"
                            />
                        </div>
                        <Link to="/warehouse/add">
                            <button className="warehouse__add-warehouse-button">
                                + Add New Warehouse
                            </button>
                        </Link>
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
                            <div className="warehouse-list__content-action">
                                <div className="warehouse-list__label--action-label">
                                    ACTION
                                </div>
                                <div className="warehouse-list__icon-container">
                                    <img
                                        className="warehouse-list__icon"
                                        src={warehouse__deleteIcon}
                                        alt="delete icon"
                                        onClick={() =>
                                            handleModalClick(warehouse)
                                        }
                                    />
                                    <Link to={`/warehouse/${warehouse.id}/edit`}>
                                    <img
                                        className="warehouse-list__icon"
                                        src={warehouse__editIcon}
                                        alt="edit icon"
                                    />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </section>
                <DeleteModal
                    modalTitle={`Delete ${itemSelected?.warehouse_name} inventory item?`}
                    modalText={`Please confirm that you'd like to delete ${itemSelected?.warehouse_name} from the list of warehouses. 
                    You won't be able to undo this action.`}
                    setitemSelected={setItemSelected}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    handleDeleteClick={handleDeleteClick}
                />
            </div>
        </main>
    );
}

export default Warehouse;
