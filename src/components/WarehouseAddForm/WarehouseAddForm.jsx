

function WarehouseAddForm() {

    return (
        <div>
            <form className="warehouseform">
                <h2> Warehouse Details </h2>
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

                <h2>Contact Details</h2>
                <label htmlFor="contact" class="warehouseform__label-contact">Contact Name</label>
                <input
                    type="text"
                    name="contactName"
                    placeholder="Contact Name"
                    className= "warehouseform__input-contact"
                ></input>
                <label htmlFor="position" class="warehouseform__label-position">Position</label>
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    className= "warehouseform__input-position"
                ></input>
                <label htmlFor="phoneNumber" class="warehouseform__label-phoneNumber">Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className= "warehouseform__input-phoneNumber"
                ></input>
                <label htmlFor="email" class="warehouseform__label-email">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className= "warehouseform__input-email"
                ></input>

                <button type="button" class="warehouseform__button-cancel">Cancel</button>
                <butto type="submit" class="warehouseform__button-add">+ Add Warehouse</butto>

            </form>
        </div>
       
    )
}


export default WarehouseAddForm