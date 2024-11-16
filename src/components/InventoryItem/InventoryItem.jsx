import "./InventoryItem.scss";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

function InventoryItem({ id, name, category, status, quantity, deleteItem }) {
    return (
        <li className="inv-item">
            <div className="inv-item__item-container">
                <div className="inv-item__container">
                    <h2 className="inv-item__label">INVENTORY ITEM</h2>
                    <Link className="inv-item__text inv-item__text--blue" to={`/inventory/${id}`}>
                        {name}
                        <span className="inv-item__inline-icon">
                            <img
                                className="inv-item__chevron-icon"
                                src={chevronIcon}
                                alt="chevron right icon"
                            />
                        </span>
                    </Link>
                </div>
                <div className="inv-item__container">
                    <h2 className="inv-item__label">CATEGORY</h2>
                    <p className="inv-item__text">{category}</p>
                </div>
                <div className="inv-item__container">
                    <h2 className="inv-item__label">STATUS</h2>
                    <p
                        className={`inv-item__status ${
                            status === "In Stock"
                                ? "inv-item__status--green"
                                : "inv-item__status--red"
                        }`}
                    >
                        {status === "In Stock" ? "IN STOCK" : "OUT OF STOCK"}
                    </p>
                </div>
                <div className="inv-item__container">
                    <h2 className="inv-item__label">QTY</h2>
                    <p className="inv-item__text">{quantity}</p>
                </div>
            </div>
            <div className="inv-item__icon-container">
                <img
                    onClick={() => {
                        deleteItem(id);
                    }}
                    className="inv-item__icon"
                    src={deleteIcon}
                    alt="delete icon"
                />
                <Link className="inv-item__link" to={`/inventory/${id}/edit`}>
                    <img className="inv-item__icon" src={editIcon} alt="edit icon" />
                </Link>
            </div>
        </li>
    );
}

export default InventoryItem;
