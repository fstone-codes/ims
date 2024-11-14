import './WarehouseAddForm.scss'
import backArrow from '../../assets/Icons/arrow_back-24px.svg'
import {useState} from 'react'

function WarehouseAddForm() {
  
    const [formData, setFormData] = useState({
        warehouseName: '',
        streetAddress: '',
        city: '',
        country: '',
        contactName: '',
        position: '',
        phoneNumber: '',
        email: ''
    });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/warehouses/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                setSuccessMessage('Warehouse added successfully!');
                setError(null);
                setFormData({
                    warehouseName: '',
                    streetAddress: '',
                    city: '',
                    country: '',
                    contactName: '',
                    position: '',
                    phoneNumber: '',
                    email: ''
                });
            } else {
                setError(result.message || 'Failed to add warehouse.');
                setSuccessMessage(null);
            }
        } catch (err) {
            setError('An error occurred while adding the warehouse.');
            setSuccessMessage(null);
        }
    };

    return (
        <div className="warehouseform-container">
            <div className="warehouseform-container__top">
                <img src={backArrow} alt="back arrow"></img>
                <h1 className="warehouseform-container__title">Add New Warehouse</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="warehouseform-card">
                    <div className="warehouseform">
                        <h2 className="warehouseform__title"> Warehouse Details </h2>
                        <label htmlFor="warehouseName" class="warehouseform__label-name">Warehouse Name</label>
                        <input
                            type="text"
                            name="warehouseName"
                            placeholder="Warehouse Name"
                            className= "warehouseform__input-name"
                            value={formData.warehouseName}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="streetAddress" class="warehouseform__label-street">Street Address</label>
                        <input
                            type="text"
                            name="streetAddress"
                            placeholder="Street Address"
                            className= "warehouseform__input-street"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="city" class="warehouseform__label-city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className= "warehouseform__input-city"
                            value={formData.city}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="country" class="warehouseform__label-country">Country</label>
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
                        <label htmlFor="contactName" class="whcontactform__label-contact">Contact Name</label>
                        <input
                            type="text"
                            name="contactName"
                            placeholder="Contact Name"
                            className= "whcontactform__input-contact"
                            value={formData.contactName}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="position" class="whcontactform__label-position">Position</label>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            className= "whcontactform__input-position"
                            value={formData.position}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="phoneNumber" class="whcontactform__label-phone">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className= "whcontactform__input-phone"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        ></input>
                        <label htmlFor="email" class="whcontactform__label-email">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className= "whcontactform__input-email"
                            value={formData.email}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>              
                <div className="warehouseform__button">
                    <button type="button" class="warehouseform__button-cancel">Cancel</button>
                    <button type="submit" class="warehouseform__button-add">+ Add Warehouse</button>
                </div>
                

            </form>
        </div>
       
    )
}


export default WarehouseAddForm