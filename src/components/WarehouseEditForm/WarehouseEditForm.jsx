import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from '../../assets/Icons/error-24px.svg';
import "./WarehouseEditForm.scss";
import { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";

function WarehouseEditForm() {
    const { warehouseId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        contact_position: "",
        contact_phone: "",
        contact_email: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchWarehouseData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/warehouses/${warehouseId}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData(data); // Populate form fields
                } else {
                    console.error("Error fetching warehouse data");
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchWarehouseData();
    }, [warehouseId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        if (value.trim() !== "") {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
    
        Object.keys(formData).forEach((key) => {
            const value = formData[key];
            if (!value || (typeof value === "string" && value.trim() === "")) {
                newErrors[key] = true; 
            }
        });
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            console.error("Validation failed");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/api/warehouses/${warehouseId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                setSuccessMessage(result.message || "Warehouse updated successfully!");
                navigate(`/warehouse/${warehouseId}`);
            } else {
                console.error("Error updating warehouse");
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const handleClick = () => {
        navigate(`/warehouse/${warehouseId}`);
    };


    return (
        <div className="warehouseform-container">
        <div className="warehouseform-container__top">
            <img src={backArrow} alt="back arrow" className="warehouse-container_arrow" onClick={handleClick}></img>
            <h1 className="warehouseform-container__title">Edit Warehouse</h1>
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
                        className={`warehouseform__input-name ${errors.warehouse_name ? 'input--error' : ''}`}
                        value={formData.warehouse_name}
                        onChange={handleInputChange}
                    />
                    {errors.warehouse_name && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="address" className="warehouseform__label-street">Street Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        className={`warehouseform__input-street ${errors.address ? 'input--error' : ''}`}
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                    {errors.address && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="city" className="warehouseform__label-city">City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className= {`warehouseform__input-city ${errors.city ? 'input--error' : ''}`}
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                     {errors.city && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="country" className="warehouseform__label-country">Country</label>
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className= {`warehouseform__input-country ${errors.country ? 'input--error' : ''}`}
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                    {errors.country && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                </div>              
                <div className="whcontactform">
                    <h2 className="whcontactform__title">Contact Details</h2>
                    <label htmlFor="contact_name" className="whcontactform__label-contact">Contact Name</label>
                    <input
                        type="text"
                        name="contact_name"
                        placeholder="Contact Name"
                        className= {`whcontactform__input-contact ${errors.contact_name ? 'input--error' : ''}`}
                        value={formData.contact_name}
                        onChange={handleInputChange}
                    />
                      {errors.contact_name && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="contact_position" className="whcontactform__label-position">Position</label>
                    <input
                        type="text"
                        name="contact_position"
                        placeholder="Position"
                        className= {`whcontactform__input-position ${errors.contact_position? 'input--error' : ''}`}
                        value={formData.contact_position}
                        onChange={handleInputChange}
                    />
                    {errors.contact_position && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="contact_phone" className="whcontactform__label-phone">Phone Number</label>
                    <input
                        type="text"
                        name="contact_phone"
                        placeholder="Phone Number"
                        className= {`whcontactform__input-phone ${errors.contact_phone? 'input--error' : ''}`}
                        value={formData.contact_phone}
                        onChange={handleInputChange}
                    />
                     {errors.contact_phone && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                    <label htmlFor="contact_email" className="whcontactform__label-email">Email</label>
                    <input
                        type="text"
                        name="contact_email"
                        placeholder="Email"
                        className= {`whcontactform__input-email ${errors.contact_email? 'input--error' : ''}`}
                        value={formData.contact_email}
                        onChange={handleInputChange}
                    />
                      {errors.contact_email && (
                        <div className="warehouseform__error-message">
                            <img src={errorIcon} alt="Error icon" className="warehouseform__error-message-icon" />
                            <span>This field is required</span>
                        </div>
                    )}
                </div>
            </div>              
            <div className="warehouseform__button">
                <button type="button" onClick={handleClick} className="warehouseform__button-cancel">Cancel</button>
                <button type="submit" className="warehouseform__button-save">Save</button>
            </div>  
        </form>
    </div>
    );
}

export default WarehouseEditForm;
