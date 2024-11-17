import ReactModal from "react-modal";
import closeIcon from "../../assets/Icons/close-24px.svg";
import "./DeleteModal.scss"; 

function DeleteModal({
    modalTitle,
    modalText,
    handleDeleteClick,
    isOpen,
    setIsOpen,
}) {
    return (
        <ReactModal
            className="modal"
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
                    background: "rgba(19, 24, 44, 1)",
                },
            }}
        >
            <div className="modal__content-wrapper">
                <img
                    className="modal__close-icon"
                    src={closeIcon}
                    alt="Close icon"
                    onClick={() => setIsOpen(false)}
                />
                <div className="modal__text-container">
                    <h1 className="modal__title">{modalTitle}</h1>
                    <p className="modal__text modal__text--large">
                        {modalText}
                    </p>
                </div>
                <div className="modal__btn-wrapper">
                    <button
                        className="modal__cancel-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="modal__delete-btn"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </ReactModal>
    );
}

export default DeleteModal;
