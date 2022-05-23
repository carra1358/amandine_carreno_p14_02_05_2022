import { useEffect, useState } from "react";
import propTypes from "prop-types"
import { useDispatch } from "react-redux";
import { upDateAction } from "redux/employeeSlice";
/*eslint-disable*/

function MenuSelect({ data }) {

    const [option, setOpion] = useState(10)
    const dispatch = useDispatch()
    const dataCopy = [...data]
    const handleshow = (e) => {

        const entrieNumber = parseInt(e.target.value)
        const result = dataCopy.slice(0, entrieNumber)
        dispatch(upDateAction(result))
        setOpion(entrieNumber)

    }

    const defaultDisplay = (data) => {
        useEffect(() => {
            const result = data.slice(0, 10)
            dispatch(upDateAction(result))
        }, [])
    }


    defaultDisplay(dataCopy)

    return (
        <div className="show_entries_wrapper">
            <span>show</span>
            <select name="entries" id="show_entries" onChange={(e) => handleshow(e)}>
                <option value="10" >10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <span>entries</span>
        </div>
    )


}

export default MenuSelect;

MenuSelect.propTypes = {
    data: propTypes.array,
}