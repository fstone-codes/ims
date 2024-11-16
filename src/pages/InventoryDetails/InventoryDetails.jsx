import "./InventoryDetails.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editWhiteIcon from "../../assets/Icons/edit-white-24px.svg";

function InventoryDetails() {
    const [singleItem, setSingleItem] = useState(null);
    const { inventoryId } = useParams();

    async function getSingleItemData() {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/inventories/${inventoryId}`
            );

            setSingleItem(data);
        } catch (error) {
            console.error("Error fetching single inventory item details: ", error);
        }
    }

    useEffect(() => {
        getSingleItemData();
    }, [inventoryId]);

    if (!singleItem) {
        return <div>Loading inventory details...</div>;
    }

    return (
        <main className="main">
            <section className="title">
                <div className="title__container">
                    <Link className="title__link" to={"/inventory"}>
                        <img
                            className="title__back-icon"
                            src={arrowBackIcon}
                            alt="arrow back icon"
                        />
                    </Link>
                    <h1 className="title__header">{singleItem.item_name}</h1>
                </div>
                <Link className="title__icon-container" to={`/inventory/${inventoryId}/edit`}>
                    <img className="title__edit-icon" src={editWhiteIcon} alt="edit icon" />
                    <p className="title__edit-text">Edit</p>
                </Link>
            </section>
            <section className="inv-details">
                <div className="inv-details__container inv-details__container--top-left">
                    <div className="inv-details__content-container">
                        <h2 className="inv-details__label">ITEM DESCRIPTION:</h2>
                        <p className="inv-details__text">{singleItem.description}</p>
                    </div>
                    <div className="inv-details__content-container">
                        <h2 className="inv-details__label">CATEGORY:</h2>
                        <p className="inv-details__text">{singleItem.category}</p>
                    </div>
                </div>
                <div className="inv-details__container inv-details__container--bottom-right">
                    <div className="inv-details__content-container">
                        <h2 className="inv-details__label">STATUS:</h2>
                        <p
                            className={`inv-details__status ${
                                singleItem.status === "In Stock"
                                    ? "inv-details__status--green"
                                    : "inv-details__status--red"
                            }`}
                        >
                            {singleItem.status === "In Stock" ? "IN STOCK" : "OUT OF STOCK"}
                        </p>
                    </div>
                    <div className="inv-details__content-container">
                        <h2 className="inv-details__label">QUANTITY:</h2>
                        <p className="inv-details__text">{singleItem.quantity}</p>
                    </div>
                    <div className="inv-details__content-container">
                        <h2 className="inv-details__label">WAREHOUSE:</h2>
                        <p className="inv-details__text">{singleItem.warehouse_name}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default InventoryDetails;
