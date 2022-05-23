import { useState } from "react"
import propTypes from "prop-types"
import { useDispatch } from "react-redux"
import { upDateAction } from "redux/employeeSlice"

function SearchBar({ initialData }) {

    const initialeMatchValue = ""
    const [noMatch, setNoMatch] = useState(initialeMatchValue)
    const dispatch = useDispatch()
    const data = [...initialData]

    const handleSearch = (input) => {
        if (input.length === 0) {
            setNoMatch(initialeMatchValue)
            return dispatch(upDateAction(initialData))
        }
        if (input.length >= 3) {

            const results = data.filter(item => {
                return (item.firstName.toLowerCase().includes(input.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(input.toLowerCase()) ||
                    item.birth.toLowerCase().includes(input.toLowerCase()) ||
                    item.startDate.toLowerCase().includes(input.toLowerCase()) ||
                    item.street.toLowerCase().includes(input.toLowerCase()) ||
                    item.state.toLowerCase().includes(input.toLowerCase()) ||
                    item.zipCode.toLowerCase().includes(input.toLowerCase()) ||
                    item.dpt.toLowerCase().includes(input.toLowerCase()) ||
                    item.city.toLowerCase().includes(input.toLowerCase())
                )
            });
            if (results.length === 0) {
                setNoMatch("Sorry there is no match to your research")
            } else {
                setNoMatch(initialeMatchValue)

            }
            return dispatch(upDateAction(results))
        }
    }


    return (<div className="search_wrapper">
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" onChange={(e) => handleSearch(e.target.value)} />
        <div>{noMatch}</div>
    </div>)
}

export default SearchBar;

SearchBar.propTypes = {
    initialData: propTypes.array,
}