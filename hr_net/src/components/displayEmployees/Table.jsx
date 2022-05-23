import { useState, useEffect } from "react"
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { upDateAction } from "redux/employeeSlice"
/*eslint-disable*/
function Table({ initialData }) {
    const employees = useSelector(state => state.employee.employees)
    const upDatedEmployees = useSelector(state => state.employee.upDatedEmployees)
    const [pages, setPages] = useState(1)
    const [firstEntrie, setFirstEntrie] = useState()
    const [lastEntrie, setLastEntrie] = useState()
    const dispatch = useDispatch()
    const [showEntries, setShowEntries] = useState(10)
    const initialeMatchValue = ""
    const [noMatch, setNoMatch] = useState(initialeMatchValue)


    const handleSearch = (input) => {
        if (input.length === 0) {
            setNoMatch(initialeMatchValue)
            return dispatch(upDateAction(initialData))
        }
        if (input.length >= 3) {

            const results = initialData.filter(item => {
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

    const sort = (data, property, order) => {
        let result = data.sort((a, b) => {
            if (isNaN(Date.parse(a[property])) || isNaN(Date.parse(b[property]))) {

                if (a[property] > b[property]) return 1;
                if (a[property] < b[property]) return -1;
                return 0;
            }
            return new Date(a[property]) - new Date(b[property])
        })
        result = order === "desc" ? result = result.reverse() : result
        return dispatch(upDateAction(result))
    }


    const handleShowEntries = (range) => {
        setShowEntries(parseInt(range))
        const desiredEntries = upDatedEmployees.splice(0, showEntries)
        setFirstEntrie(0)
        setLastEntrie(showEntries)
        return dispatch(upDateAction(desiredEntries))
    }

    const handleShowNext = (data) => {
        if (pages > 1) {
            const desiredEntries = data.splice(data[showEntries], data[showEntries++])
            setFirstEntrie(showEntries)
            setLastEntrie(showEntries++)
            return dispatch(upDateAction(desiredEntries))
        }

    }

    const handleShowPrev = (data) => {
        if (!pages === 1) {
            const desiredEntries = data.splice(data[showEntries--], data[showEntries])
            setFirstEntrie(showEntries--)
            setLastEntrie(showEntries)
            return dispatch(upDateAction(desiredEntries))
        }

    }


    const defaultDisplay = () => {
        useEffect(() => {
            handleShowEntries(showEntries)
        }, [])
    }

    defaultDisplay()


    return (
        <main className="main_container_employee">
            <h1 className="title">Current Employee</h1>
            <div className="global_filter_container">
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
                <div className="search_wrapper">
                    <label htmlFor="search">Search:</label>
                    <input type="text" id="search" onChange={(e) => handleSearch(data, e.target.value)} />
                </div>
            </div>
            <div className="tab_containers">
                <table className="employee_table">
                    <thead className="employee_table_header">
                        <tr>
                            <td>First Name <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "firstName", "asc")} /><VscTriangleDown onClick={() => sortString(upDatedEmployees, "firstName", "desc")} /></span></td>
                            <td>Last Name <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "lastName", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "lastName", "desc")} /></span></td>
                            <td>Start Date <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "startDate", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "startDate", "desc")}></VscTriangleDown></span></td>
                            <td>Department <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "dpt", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "dpt", "desc")} /></span></td>
                            <td>Date of Birth <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "birth", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "birth", "desc")}></VscTriangleDown></span></td>
                            <td>Street <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "street", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "street", "desc")} /></span></td>
                            <td>City <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "city", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "city", "desc")} /></span></td>
                            <td>State <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "state", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "state", "desc")} /></span></td>
                            <td>Zipcode <span className="table_cell_filter"><VscTriangleUp onClick={() => sort(upDatedEmployees, "zipCode", "asc")} /><VscTriangleDown onClick={() => sort(upDatedEmployees, "zipCode", "desc")} /></span></td>
                        </tr>
                    </thead>
                    <tbody className="employee_table_body">
                        {
                            upDatedEmployees.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.dpt}</td>
                                        <td>{item.birth}</td>
                                        <td>{item.street}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                        <td>{item.zipCode}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>{noMatch}</div>
            </div>
            <div>
            </div>
            <div className="global_filter_container">
                <p>
                    showing {firstEntrie} to {lastEntrie} of {upDatedEmployees.length} entries
                </p>
                <div>
                    <p> <span onClick={() => handleShowPrev(upDatedEmployees)}>Prev</span><span>{Math.round(upDatedEmployees.length / showEntries) <= 1 ? "1" : setPages(Math.round(upDatedEmployees.length / showEntries))}</span> <span onClick={handleShowNext(upDatedEmployees)}>next</span></p>
                </div>
            </div>
        </main>
    )

}
export default Table; 