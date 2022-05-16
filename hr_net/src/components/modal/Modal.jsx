
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5"
import propTypes from "prop-types"
import "./modal.scss"


function Modal({ visibility, closeModal }) {

    const bodyheight = document.body.clientHeight;
    console.log(bodyheight)
    const [h, setH] = useState(bodyheight);

    const updateheight = () => {
        if (bodyheight) {
            setH(bodyheight);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateheight);
        setH(bodyheight);
        return () => {
            window.removeEventListener("resize", updateheight);
        };
    }, []);
    return (
        <div className={"modal_bck " + visibility} style={{ height: h }}>
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