import { Link } from "react-router-dom";
import propTypes from "prop-types"
import { FaUserPlus } from "react-icons/fa";
import "./custom_nav.scss"
/* eslint-disable */
/**
 * Custom navigation Link
 * @param {string} to path targeted
 * @param {string} label link's text content
 * @returns react-element
 */
function CustomNav({ to, label }) {
    return (
        label === "Home" ?
            <>
                <Link to={to}>
                    <FaUserPlus />
                    <h4>{label}</h4>
                </Link>
            </>
            : <>
                <Link to={to}>
                    <FaUserPlus />
                    <h4>{label}</h4>
                </Link>
            </>
    )
}
export default CustomNav;

CustomNav.propTypes = {
    to: propTypes.string,
    label: propTypes.string,

}