import { IoCloseSharp } from "react-icons/io5"
import propTypes from "prop-types"
import "./modal.scss"


function Modal({ visibility, closeModal }) {

    const bodyheight = document.body.clientHeight;

    return (
        <div className={"modal_bck " + visibility} style={{ height: bodyheight }}>
            <div className="modal_wrapper">
                <span className="modal_close" onClick={closeModal}><IoCloseSharp /></span>
                <p className="modal_message">Employee Created</p>
            </div>
        </div>
    )

}

Modal.propTypes = {
    visibility: propTypes.string,
    closeModal: propTypes.func
}
export default Modal;