import React from "react";
import { Link } from "react-router-dom";
import "./warehouse.scss";
import axios from "axios";
import warehouse__sortIcon from "../../assets/Icons/sort-24px.svg";
import warehouse__deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import warehouse__editIcon from "../../assets/Icons/edit-24px.svg";
import { useState, useEffect } from "react";

//hardcoded data
// const warehouses = [
//   {
//     id: 1,
//     warehouse_name: "Manhattan",
//     address: "503 Broadway, New York, USA",
//     contact_name: "Parmin Aujla",
//     contact_phone: "+1 (629)-555-0129",
//     contact_email: email@email.com,
//   },
//   {
//     id: 2,
//     name: "Manhattan",
//     address: "503 Broadway, New York, USA",
//     contactName: "Parmin Aujla",
//     contactInfo: "+1 (629)-555-0129",
//   },
// ];

function Warehouse() {
  const [warehouses, setWarehouses] = useState([]);
  async function getAllWarehouseData() {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/warehouses`);

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
          {warehouses.map((warehouse) => (
            <li key={warehouse.id} className="warehouse-list__item">
              
                <div className="warehouse-list__table-components">
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">WAREHOUSE</p>
                    <Link
                      to={`/warehouse/${warehouse.id}`}
                      className="warehouse-list__link">                
                    <p className="warehouse-list__text">
                      {warehouse.warehouse_name}
                    </p>
                    </Link>
                    
                  </div>
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">CONTACT NAME</p>
                    <p className="warehouse-list__text">
                      {warehouse.contact_name}
                    </p>
                  </div>
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">ADDRESS </p>
                    <p className="warehouse-list__text">{warehouse.address}</p>
                  </div>
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">CONTACT INFORMATION</p>
                    <p className="warehouse-list__text">
                      {warehouse.contact_phone}
                    </p>
                    <p className="warehouse-list__text">
                      {warehouse.contact_email}
                    </p>
                  </div>
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

                {/* <div className="warehouse-list__row">
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">WAREHOUSE</p>
                    <p className="warehouse-list__text">
                      {warehouse.warehouse_name}
                    </p>
                  </div>
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">CONTACT NAME</p>
                    <p className="warehouse-list__text">
                      {warehouse.contact_name}
                    </p>
                  </div>
                </div>

                <div className="warehouse-list__row">
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">ADDRESS </p>
                    <p className="warehouse-list__text">{warehouse.address}</p>
                  </div>
                  <div className="warehouse-list__content">
                    <p className="warehouse-list__label">CONTACT INFORMATION</p>
                    <p className="warehouse-list__text">
                      {warehouse.contact_phone}
                    </p>
                    <p className="warehouse-list__text">
                      {warehouse.contact_email}
                    </p>
                  </div>
                </div>
                <div className="warehouse-list__row">
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
                </div> */}
              
            </li>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Warehouse;
