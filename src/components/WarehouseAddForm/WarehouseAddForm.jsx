

function WarehouseAddForm() {

    return (
        <div>
            <form>
                <div className="warehouseform">
                    <h2 className="warehouseform__title"> Warehouse Details </h2>
                    <label htmlFor="warehouseName" class="warehouseform__label-name">WareHouse Name</label>
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
                    <h2>Contact Details</h2>
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
                    <label htmlFor="phoneNumber" class="whcontactform__label-phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className= "whcontactform__input-phoneNumber"
                    ></input>
                    <label htmlFor="email" class="whcontactform__label-email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className= "whcontactform__input-email"
                    ></input>
                </div>

                <button type="button" class="warehouseform__button-cancel">Cancel</button>
                <butto type="submit" class="warehouseform__button-add">+ Add Warehouse</butto>

            </form>
        </div>
       
    )
}


export default WarehouseAddForm