import './WarehouseAddForm.scss'
import backArrow from '../../assets/Icons/arrow_back-24px.svg'

function WarehouseAddForm() {
  

    return (
        <div className="warehouseform-container">
            <div className="warehouseform-container__top">
                <img src={backArrow} alt="back arrow"></img>
                <h1 className="warehouseform-container__title">Add New Warehouse</h1>
            </div>
            <form>
                <div className="warehouseform-card">
                    <div className="warehouseform">
                        <h2 className="warehouseform__title"> Warehouse Details </h2>
                        <label htmlFor="warehouseName" class="warehouseform__label-name">Warehouse Name</label>
                        <input
                            type="text"
                            name="warehouseName"
                            placeholder="Warehouse Name"
                            className= "warehouseform__input-name"
                        ></input>
                        <label htmlFor="streetAdress" class="warehouseform__label-street">Street Address</label>
                        <input
                            type="text"
                            name="streetAddress"
                            placeholder="Street Address"
                            className= "warehouseform__input-street"
                        ></input>
                        <label htmlFor="city" class="warehouseform__label-city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className= "warehouseform__input-city"
                        ></input>
                        <label htmlFor="country" class="warehouseform__label-country">Country</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            className= "warehouseform__input-country"
                        ></input>
                    </div>              
                    <div className="whcontactform">
                        <h2 className="whcontactform__title">Contact Details</h2>
                        <label htmlFor="contact" class="whcontactform__label-contact">Contact Name</label>
                        <input
                            type="text"
                            name="contactName"
                            placeholder="Contact Name"
                            className= "whcontactform__input-contact"
                        ></input>
                        <label htmlFor="position" class="whcontactform__label-position">Position</label>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            className= "whcontactform__input-position"
                        ></input>
                        <label htmlFor="phoneNumber" class="whcontactform__label-phone">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className= "whcontactform__input-phone"
                        ></input>
                        <label htmlFor="email" class="whcontactform__label-email">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className= "whcontactform__input-email"
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