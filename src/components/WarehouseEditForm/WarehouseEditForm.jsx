import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function WarehouseEditForm() {
    const { warehouseId } = useParams(); 
    const [formData, setFormData] = useState({
        warehouse_name: '',
        address: '',
        city: '',
        country: '',
        contact_name: '',
        contact_position: '',
        contact_phone: '',
        contact_email: ''
    });

    return (
        <div className="warehouseform-container">
            <div className="warehouseform-container__top">
                <Link to="/warehouse" className="warehouse-container_arrow">
                    <img src={backArrow} alt="back arrow" className="warehouse-container_arrow"></img>
                </Link>
                <h1 className="warehouseform-container__title">Add New Warehouse</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="warehouseform-card">
                    <div className="warehouseform">
                        <h2 className="warehouseform__title"> Warehouse Details </h2>
                        <label htmlFor="warehouse_name" className="warehouseform__label-name">Warehouse Name</label>
                        <input
                            type="text"
                            name="warehouse_name"
                            placeholder="Warehouse Name"
                            className= "warehouseform__input-name"
                            value={formData.warehouse_name}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="address" className="warehouseform__label-street">Street Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            className= "warehouseform__input-street"
                            value={formData.address}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="city" className="warehouseform__label-city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className= "warehouseform__input-city"
                            value={formData.city}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="country" className="warehouseform__label-country">Country</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            className= "warehouseform__input-country"
                            value={formData.country}
                            onChange={handleInputChange}
                        ></input>
                    </div>              
                    <div className="whcontactform">
                        <h2 className="whcontactform__title">Contact Details</h2>
                        <label htmlFor="contact_name" className="whcontactform__label-contact">Contact Name</label>
                        <input
                            type="text"
                            name="contact_name"
                            placeholder="Contact Name"
                            className= "whcontactform__input-contact"
                            value={formData.contact_name}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="contact_position" className="whcontactform__label-position">Position</label>
                        <input
                            type="text"
                            name="contact_position"
                            placeholder="Position"
                            className= "whcontactform__input-position"
                            value={formData.contact_position}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="contact_phone" className="whcontactform__label-phone">Phone Number</label>
                        <input
                            type="text"
                            name="contact_phone"
                            placeholder="Phone Number"
                            className= "whcontactform__input-phone"
                            value={formData.contact_phone}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="contact_email" className="whcontactform__label-email">Email</label>
                        <input
                            type="text"
                            name="contact_email"
                            placeholder="Email"
                            className= "whcontactform__input-email"
                            value={formData.contact_email}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>              
                <div className="warehouseform__button">
                    <button type="button" onClick={handleClick} className="warehouseform__button-cancel">Cancel</button>
                    <button type="submit" className="warehouseform__button-add">+ Add Warehouse</button>
                </div>
            </form>
        </div>
    )

}

export default WarehouseEditForm;