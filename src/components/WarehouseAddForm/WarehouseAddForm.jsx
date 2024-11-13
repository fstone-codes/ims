
function WarehouseAddForm() {

    return (
        <div>
            <form className="warehouseform">
                <h2> Warehouse Details </h2>
                <label htmlfor="warehouseName">WareHouse Name</label>
                <input
                    type="text"
                    name="warehouseName"
                    placeholder="Warehouse Name"
                    className= ""
                ></input>
                <label>Street Address</label>
                <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    className= ""
                ></input>
                <label>City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className= ""
                ></input>
                <label>Country</label>
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className= ""
                ></input>

                <h2>Contact Details</h2>
                <label>Contact Name</label>
                <input
                    type="text"
                    name="contactName"
                    placeholder="Contact Name"
                    className= ""
                ></input>
                <label>Position</label>
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    className= ""
                ></input>
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className= ""
                ></input>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className= ""
                ></input>

            </form>
        </div>
       
    )
}


export default WarehouseAddForm