const { useState } = require("react")
import propTypes from "prop-types"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"

/*eslint-disable*/

function Icon({ handleSortUp, handleSortDown }) {

    const [isUpActive, setisUpActive] = useState(false)

    return (
        <>
            <VscTriangleUp onClick={() => {
                setisUpActive(true)

            }} style={{ color: isUpActive ? "#243400" : "#FFFF" }} /> <VscTriangleDown onClick={() => {
                setisUpActive(false)

            }} style={{ color: isUpActive ? "#FFFF" : "#243400" }} />
        </>
    )

}

export default Icon;

Icon.propTypes = {
    handleSortUp: propTypes.func,
    handleSortDown: propTypes.func

}