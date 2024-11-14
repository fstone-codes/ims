import React from 'react';
import {Link} from 'react-router-dom';
import './warehouse.scss';

//hardcoded data 
const warehouses = [
    {id: 1, name: 'Manhattan' , address: '503 Broadway, New York, USA', contactName: 'Parmin Aujla' , contactInfo: '+1 (629)-555-0129'},
    {id: 2, name: 'Manhattan' , address: '503 Broadway, New York, USA', contactName: 'Parmin Aujla' , contactInfo: '+1 (629)-555-0129'}
];

function Warehouse() {
    return (
        <main className = 'main'>
        <div className = 'warehouse-list'>
            <div className = 'warehouse-list__header'>
            <h1 className = 'warehouse-list__heading'>Warehouses</h1>
            <div className = 'warehouse-list__search-container'> <input type="text"
            placeholder="Search..."
            className = "warehouse-list__search" />
            <button className = 'warehouse-list__add-warehouse-button'>+Add New Warehouse</button>
            </div>
            </div>
            <div className = "warehouse-list__items">
                {warehouses.map((warehouse) => (
                    <li key = {warehouse.id} className='warehouse-list__item'>
                        <Link to = {`/warehouse/${warehouse.id}`} className = "warehouse-list__link">
                        <h2>{warehouse.name}</h2>
                        <p>Address {warehouse.address}</p>
                        <p>Contact Name {warehouse.contactName}</p>
                        </Link>
                    </li>
                ))}
            </div>
            
        </div>
        </main>
    );
};

export default Warehouse