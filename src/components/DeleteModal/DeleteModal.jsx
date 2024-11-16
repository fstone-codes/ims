import ReactModal from "react-modal";
import closeIcon from "../../assets/Icons/close-24px.svg";

function DeleteModal({
    modalTitle,
    modalText,
    handleModalClick,
    setItemSelected,
    handleDeleteClick,
    isOpen,
    setIsOpen
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
            handleDeleteClick={handleDeleteClick}
            handleModalClick={handleModalClick}
            setItemSelected={setItemSelected}
            style={{
                overlay: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
                content: {
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }
            }}
        >
            <div className="modal__content-wrapper">
                <div className="modal__content-container">
                    <img className="modal__close-icon" src={closeIcon} alt="Close icon" onClick={() => setIsOpen(false)} />
                    <h1 className="modal__title">{modalTitle}</h1>
                    <p className="modal__text modal__text--large">{modalText}</p>
                </div>
                <div className="modal__btn-wrapper">
                    <button className="modal___cancel-btn" onClick={() => setIsOpen(false)}>Cancel</button>
                    <button
                        className="modal___delete-btn"
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
