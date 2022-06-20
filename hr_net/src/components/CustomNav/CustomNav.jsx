import { Link } from "react-router-dom";
import propTypes from "prop-types"
import { CgUserList, CgUserAdd } from "react-icons/cg";
import "./custom_nav.scss"

/**
 * Custom navigation Link, display icon according to path name
 * @param {string} to path targeted
 * @returns react-element
 */
function CustomNav({ to }) {


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