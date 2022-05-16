
import { IoCloseSharp } from "react-icons/io5"
import propTypes from "prop-types"
import "./modal.scss"
import { useRef } from "react";
// import { useState } from "react"

function Modal({ visibility }) {

    const modal = useRef();

    const closeModal = () => {
        modal.current.classList.remove("visible")
        modal.current.classList.add("hidden")
    }

    return (
        <div className={"modal_bck " + visibility} ref={modal}>
            <div className="modal_wrapper">
                <span className="modal_close" onClick={closeModal}><IoCloseSharp /></span>
                <p className="modal_message">Employee Created</p>
            </div>
        </div>
    )

}

Modal.propTypes = {
    visibility: propTypes.string
}
export default Modal;