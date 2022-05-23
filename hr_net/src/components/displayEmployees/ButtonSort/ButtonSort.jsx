import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import propTypes from "prop-types"
import { useDispatch } from "react-redux"
import { upDateAction } from "redux/employeeSlice"

function ButtonSort({ data, property }) {

    const dispatch = useDispatch()
    const dataCopy = [...data]

    const sort = (property, order) => {
        let result = dataCopy.sort((a, b) => {
            if (isNaN(Date.parse(a[property])) || isNaN(Date.parse(b[property]))) {

                if (a[property] > b[property]) return 1;
                if (a[property] < b[property]) return -1;
                return 0;
            }
            else {
                return new Date(a[property]) - new Date(b[property])
            }
        })
        result = order === "desc" ? result = result.reverse() : result
        return dispatch(upDateAction(result))
    }

    return (
        <>
            <VscTriangleUp onClick={() => sort(property, "asc")} /><VscTriangleDown onClick={() => sort(property, "desc")} />
        </>
    )
}

export default ButtonSort;

ButtonSort.propTypes = {
    data: propTypes.array,
    property: propTypes.string,
    handleDataChange: propTypes.func,
}