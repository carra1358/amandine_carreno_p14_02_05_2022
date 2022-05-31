import { Link } from "react-router-dom";
import propTypes from "prop-types"
import { CgUserList, CgUserAdd } from "react-icons/cg";
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
        <>

            <Link to={to} className="nav-item">
                {
                    to === "/" ?
                        <CgUserAdd /> : <CgUserList />
                }
            </Link>

        </>
    )
}
export default CustomNav;

CustomNav.propTypes = {
    to: propTypes.string,
    label: propTypes.string,
}