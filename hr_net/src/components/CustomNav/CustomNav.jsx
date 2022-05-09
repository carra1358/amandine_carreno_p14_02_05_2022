import { Link } from "react-router-dom";
import propTypes from "prop-types"
import { CgUserList, CgUserAdd } from "react-icons/cg";
import "./custom_nav.scss"
import { useState } from "react";
/* eslint-disable */
/**
 * Custom navigation Link
 * @param {string} to path targeted
 * @param {string} label link's text content
 * @returns react-element
 */
function CustomNav({ to, label }) {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            {isHover ?

                <Link to={to} className="nav-item" onMouseOut={() => setIsHover(false)}>
                    {label}<br />
                    employees
                </Link>

                :

                <Link to={to} className="nav-item" onMouseOver={() => setIsHover(true)}>
                    {
                        to === "/" ?
                            <CgUserAdd /> : <CgUserList />
                    }
                </Link>}

        </>
    )
}
export default CustomNav;

CustomNav.propTypes = {
    to: propTypes.string,
    label: propTypes.string,
}