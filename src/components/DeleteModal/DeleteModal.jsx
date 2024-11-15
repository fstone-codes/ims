import ReactModal from "react-modal";
import closeIcon from "../../assets/Icons/close-24px.svg";

function DeleteModal({ modalTitle, modalText, handleDeleteClick }) {
    return (
        <ReactModal className="modal"
            isOpen={isOpen}
            // Attach modal to the main.jsx element (with id root)
            appElement={document.getElementById("root")}
            // The 2 lines below enable esc to close the modal
            shouldCloseOnEsc={true}
            onRequestClose={() => setIsOpen(false)}
            style={{
                overlay: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            }}
        >   
        <div>
            <img src={closeIcon} alt="Close icon" />
            <h1 className="modal__title">{modalTitle}</h1>
            <p className="modal__text modal__text--large">{modalText}</p>
        </div>
        <div className="modal__btn-wrapper">
            <button className="modal___cancel-btn">Cancel</button>
            <button className="modal___delete-btn" onClick={handleDeleteClick} >Delete</button>
        </div>

        </ReactModal>
    );
}