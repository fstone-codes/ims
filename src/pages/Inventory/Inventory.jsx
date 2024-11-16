import "./Inventory.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import InventoryItem from "../../components/InventoryItem/InventoryItem";

// const BASE_URL = import.meta.env.VITE_API_URL;

function Inventory() {
    const [inventory, setInventory] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [itemSelected, setitemSelected] = useState(null);

    const navigate = useNavigate();

    // HandleClick for Add button
    const addHandleClick = () => navigate("/warehouse/add");

    const handleModalClick = (inventoryItem) => {
      setitemSelected(inventoryItem);
      setIsOpen(true);
    };

    const getInventory = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/inventories"
            );
            const inventoryData = response.data;
            setInventory(inventoryData);
        } catch (error) {
            console.error("Error fetching inventory data: ", error);
        }
    };

    const handleDeleteClick = async () => {
      if (!itemSelected) return;
      try {
        const response = await axios.delete(
          `http://localhost:8080/api/inventories/${itemSelected.id}`
        );
        // Filter the item selected from the list of inventories fetched previously 
        setInventory((previousInv) => {
          return previousInv.filter((invItem) => invItem.id !== itemSelected.id)
        });
        setIsOpen(false);
      } catch (error) {
        console.error("Error deleting inventory item: ", error);
      }
    }

    useEffect(() => {
        getInventory();
    }, []);

//     return (
//         <main className="inventory-wrapper">
//             <section className="inventory">
//                 <div className="inventory__header">
//                     <h1 className="inventory__title">Inventory</h1>
//                     <article className="inventory__CTA-field-container">
//                         <input
//                             className="input-field"
//                             type="text"
//                             placeholder="Search..."
//                         />
//                         <button className="add-button" onClick={addHandleClick}>
//                             +Add New Item
//                         </button>
//                     </article>
//                 </div>
//                 <ul className="inventory__list">
//                     {inventory.map((inventoryItem) => (
//                         <li className="inventory__item" key={inventoryItem.id}>
//                             <div className="inventory__table-components">
//                                 <article className="inventory__content">
//                                     <div className="inventory__tb-header-wrapper">
//                                         <h4 className="inventory__label">
//                                             INVENTORY ITEM
//                                         </h4>
//                                         <img
//                                             className="inventory__sort-icon"
//                                             src={sortIcon}
//                                             alt="sort icon"
//                                         />
//                                     </div>
//                                     <Link
//                                         className="inventory__link inventory__link--blue"
//                                         to="/inventory/:inventoryId"
//                                     >
//                                         <p className="inventory__text inventory__text--blue">
//                                             {inventoryItem.item_name}
//                                         </p>
//                                         <img
//                                             className="inventory__chevron-icon"
//                                             src={chevronIcon}
//                                             alt="chevron right icon"
//                                         />
//                                     </Link>
//                                 </article>
//                                 <article className="inventory__content">
//                                     <div className="inventory__tb-header-wrapper">
//                                         <h4 className="inventory__label">
//                                             CATEGORY
//                                         </h4>
//                                         <img
//                                             className="inventory__sort-icon"
//                                             src={sortIcon}
//                                             alt="sort right icon"
//                                         />
//                                     </div>
//                                     <p className="inventory__text inventory__text--medium">
//                                         {inventoryItem.category}
//                                     </p>
//                                 </article>
//                                 <article className="inventory__content">
//                                     <div className="inventory__tb-header-wrapper">
//                                         <h4 className="inventory__label">
//                                             STATUS
//                                         </h4>
//                                         <img
//                                             className="inventory__sort-icon"
//                                             src={sortIcon}
//                                             alt="sort right icon"
//                                         />
//                                     </div>
//                                     <div
//                                         className={`inventory__status-wrapper ${
//                                             inventoryItem.status === "In Stock"
//                                                 ? "inventory__status-wrapper--green"
//                                                 : "inventory__status-wrapper--red"
//                                         }`}
//                                     >
//                                         <p className="inventory__text inventory__text--h4">
//                                             {inventoryItem.status}
//                                         </p>
//                                     </div>
//                                 </article>
//                                 <article className="inventory__content">
//                                     <div className="inventory__tb-header-wrapper">
//                                         <h4 className="inventory__label">
//                                             QTY
//                                         </h4>
//                                         <img
//                                             className="inventory__sort-icon"
//                                             src={sortIcon}
//                                             alt="sort right icon"
//                                         />
//                                     </div>
//                                     <p className="inventory__text inventory__text--medium">
//                                         {inventoryItem.quantity}
//                                     </p>
//                                 </article>
//                                 <article className="inventory__content inventory__content--transparent"></article>
//                                 <article className="inventory__content">
//                                     <div className="inventory__tb-header-wrapper">
//                                         <h4 className="inventory__label">
//                                             WAREHOUSE
//                                         </h4>
//                                         <img
//                                             className="inventory__sort-icon"
//                                             src={sortIcon}
//                                             alt="sort right icon"
//                                         />
//                                     </div>
//                                     <p className="inventory__text inventory__text--medium">
//                                         {inventoryItem.warehouse_name}
//                                     </p>
//                                 </article>
//                             </div>
//                             <article className="inventory__inventory__content">
//                                 <div className="inventory__tb-header-wrapper">
//                                     <h4 className="inventory__label">
//                                         ACTIONS
//                                     </h4>
//                                     <img
//                                         className="inventory__sort-icon"
//                                         src={sortIcon}
//                                         alt="sort right icon"
//                                     />
//                                 </div>
//                                 <div className="inventory__icon-wrapper">
//                                     <img
//                                         className="inventory__icon"
//                                         src={deleteIcon}
//                                         alt="delete icon"
//                                         // Opens and passes the mapped item to the modal
//                                         onClick={() => handleModalClick(inventoryItem)}
//                                     />
                                    
//                                     <Link to={`/inventory/${inventoryItem.id}/edit`}>
//                                         <img
//                                             className="inventory__icon"
//                                             src={editIcon}
//                                             alt="edit icon"
//                                         />
//                                     </Link>
//                                 </div>
//                             </article>
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </main>
//     );
// }

return (
  <main className="inventory-wrapper">
    <section className="inventory">
      <div className="inventory__header">
        <h1 className="inventory__title">Inventory</h1>
        <article className="inventory__CTA-field-container">
          <input className="input-field" type="text" placeholder="Search..." />
          <button className="add-button" onClick={addHandleClick}>
            +Add New Item
          </button>
        </article>
      </div>
      <ul className="inventory__list">
        {inventory.map((inventoryItem) => (
          <li className="inventory__item" key={inventoryItem.id}>
            <div className="inventory__table-components">
              <article className="inventory__content">
                <div className="inventory__tb-header-wrapper">
                  <h4 className="inventory__label">INVENTORY ITEM</h4>
                  <img
                    className="inventory__sort-icon"
                    src={sortIcon}
                    alt="sort icon"
                    />
                </div>
                <Link className="inventory__link inventory__link--blue" to="/inventory/:inventoryId">
                  <p className="inventory__text inventory__text--blue">
                    {inventoryItem.item_name}
                  </p>
                  <img
                    className="inventory__chevron-icon"
                    src={chevronIcon}
                    alt="chevron right icon"
                  />
                </Link>
              </article>
              <article className="inventory__content">
              <div className="inventory__tb-header-wrapper">
                <h4 className="inventory__label">CATEGORY</h4>
                <img
                    className="inventory__sort-icon"
                    src={sortIcon}
                    alt="sort right icon"
                  />
              </div>
                <p className="inventory__text inventory__text--medium">{inventoryItem.category}</p>
              </article>
              <article className="inventory__content">
                <div className="inventory__tb-header-wrapper">
                  <h4 className="inventory__label">STATUS</h4>
                  <img
                    className="inventory__sort-icon"
                    src={sortIcon}
                    alt="sort right icon"
                  />
                </div>
                <p
                      className={`inventory__status ${
                        inventoryItem.status === "In Stock"
                              ? "inventory__status--green"
                              : "inventory__status--red"
                      }`}
                  >
                      {inventoryItem.status === "In Stock" ? "IN STOCK" : "OUT OF STOCK"}
                  </p>
              </article>
              <article className="inventory__content">
              <div className="inventory__tb-header-wrapper">
                <h4 className="inventory__label">QTY</h4>
                <img
                    className="inventory__sort-icon"
                    src={sortIcon}
                    alt="sort right icon"
                  />
              </div>
                <p className="inventory__text inventory__text--medium">{inventoryItem.quantity}</p>
              </article>
              <article className="inventory__content inventory__content--transparent">
              </article>
              <article className="inventory__content">
                <div className="inventory__tb-header-wrapper">
                  <h4 className="inventory__label">WAREHOUSE</h4>
                  <img
                    className="inventory__sort-icon"
                    src={sortIcon}
                    alt="sort right icon"
                  />
                </div>
                <p className="inventory__text inventory__text--medium">
                  {inventoryItem.warehouse_name}
                </p>
              </article>
            </div>
            <article className="inventory__inventory__content">
              <div className="inventory__tb-header-wrapper">
                <h4 className="inventory__label">ACTIONS</h4>
                <img
                    className="inventory__sort-icon"
                    src={sortIcon}
                    alt="sort right icon"
                  />
              </div>
              <div className="inventory__icon-wrapper">
              <img
                  className="inventory__icon"
                  src={deleteIcon}
                  alt="delete icon"
                  // Opens and passes the mapped item to the modal
                  onClick={() => handleModalClick(inventoryItem)}
              />
                <DeleteModal
                    modalTitle={`Delete ${itemSelected?.item_name} inventory item?`}
                    modalText={`Please confirm that you'd like to delete ${itemSelected?.item_name} from the inventory list. 
                    You won't be able to undo this action.`}
                    setitemSelected={setitemSelected}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    handleDeleteClick={handleDeleteClick}
                />
                <Link to={`/inventory/${inventoryItem.id}/edit`}>
                    <img
                    className="inventory__icon"
                    src={editIcon}
                    alt="edit icon"
                    />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </main>
);
}

export default Inventory;
