import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import "./table.scss"




// Display employees list, constains all filters and pagination logic
function Table() {


    const initialeMatchValue = ""
    const initEmployees = useSelector(state => state.employee.employees)
    const [data, setData] = useState([...initEmployees])
    const [dataShown, setDataShown] = useState(null)
    const [input, setInput] = useState(initialeMatchValue)
    const [offset, setOffset] = useState(1)
    const [limit, setLimit] = useState(10)
    const [noMatch, setNoMatch] = useState(initialeMatchValue)
    const [visibility, setvisibility] = useState("visible")
    const pageNumbers = []
    const lastEntrie = offset * limit
    const firstEntrie = lastEntrie - limit
    const [propertySelected, setPropertySelected] = useState(null)



    // push numbre of pages in function of data array 
    for (let i = 1; i <= Math.ceil(data.length / limit); i++) {
        pageNumbers.push(i);
    }

    // return wich data have to be displayed
    const handleLimit = () => {

        if (data.length === 0) {
            setDataShown(null)
        }
        const result = data.slice(firstEntrie, lastEntrie)
        setDataShown(result)
    }

    /**
     * function to sort each column in acesndent order
     * @param {string} property column selected
     * @return array 
     */
    const sortUp = (property) => {
        const result = data.sort((a, b) => {

            if (a[property] > b[property]) return 1;
            if (a[property] < b[property]) return -1;
            return 0;
        })

        setData(result)
        handleLimit()
        setPropertySelected(`${property}Up`)
    }

    /**
  * function to sort each column in descendant order
  * @param {string} property column selected
  * @return array 
  */
    const sortDown = (property) => {
        const result = data.sort((a, b) => {

            if (a[property] < b[property]) return 1;
            if (a[property] > b[property]) return -1;
            return 0;

        })

        setData(result)
        handleLimit()
        setPropertySelected(`${property}Down`)
    }

    // filter by input in searchBar
    const handleSearch = () => {

        const result = initEmployees.filter(item => {
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
        })
        if (result.length > 0) {
            setData(result)
            handleLimit()
            setNoMatch(initialeMatchValue)
            setvisibility("visible")
        } if (result.length === 0) {
            setDataShown(result)
            setNoMatch("no match found")
            setvisibility("hidden")
        }

    }

    // reset to intial state
    const clearResult = () => {
        setOffset(1)
        setData([...initEmployees])
        handleLimit()
        setvisibility("visible")
    }

    //handle default data display when component is mounted
    useEffect(() => {
        const x = initEmployees.slice(firstEntrie, lastEntrie)
        setDataShown(x)
    }, [])

    //handle data display when offset or limit are modified
    useEffect(() => {
        handleLimit()
    }
        , [offset, limit])

    //handle search when input is modified
    useEffect(() => {
        handleSearch()

        return (() => {
            clearResult()
        })
    }, [input])





    return (
        <main className="main_container_employee">
            <h1 className="title">Current Employee</h1>
            <div className="global_filter_container">
                <div className="show_entries_wrapper">
                    <span>show</span>
                    <select name="entries" id="show_entries" onChange={(e) => setLimit(e.target.value)}>
                        <option value="10" >10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>entries</span>
                </div>
                <div className="search_wrapper">
                    <label htmlFor="search">Search:</label>
                    <input type="text" id="search" onChange={(e) => setInput(e.target.value)} />
                </div>
            </div>
            <div className="tab_containers">
                <table className="employee_table">
                    <thead className="employee_table_header">
                        <tr>
                            <td>First Name
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "firstNameUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("firstName")} className="sort_icon" />
                                    <VscTriangleDown onClick={() => sortDown("firstName")} fill={propertySelected === "firstNameDown" ? "#243400" : "#FFFF"} />
                                </span>
                            </td>
                            <td>Last Name
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "lastNameUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("lastName")} />
                                    <VscTriangleDown fill={propertySelected === "lastNameDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("lastName")} />
                                </span>
                            </td>
                            <td>Start Date
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "startDateUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("startDate")} />
                                    <VscTriangleDown fill={propertySelected === "startDateDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("startDate")}></VscTriangleDown>
                                </span>
                            </td>
                            <td>Department
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "dptUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("dpt")} />
                                    <VscTriangleDown fill={propertySelected === "dptDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("dpt")} />
                                </span>
                            </td>
                            <td>Date of Birth
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "birthUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("birth")} />
                                    <VscTriangleDown fill={propertySelected === "birthDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("birth")}></VscTriangleDown>
                                </span>
                            </td>
                            <td>Street
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "streetUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("street")} />
                                    <VscTriangleDown fill={propertySelected === "streetDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("street")} />
                                </span>
                            </td>
                            <td>City
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "cityUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("city")} />
                                    <VscTriangleDown fill={propertySelected === "cityDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("city")} />
                                </span>
                            </td>
                            <td>State
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "stateUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("state")} />
                                    <VscTriangleDown fill={propertySelected === "stateDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("state")} />
                                </span>
                            </td>
                            <td>Zipcode
                                <span className="table_cell_filter">
                                    <VscTriangleUp fill={propertySelected === "zipCodeUp" ? "#243400" : "#FFFF"} onClick={() => sortUp("zipCode")} />
                                    <VscTriangleDown fill={propertySelected === "zipCodeDown" ? "#243400" : "#FFFF"} onClick={() => sortDown("zipCode")} />
                                </span>
                            </td>

                        </tr>
                    </thead>
                    <tbody className="employee_table_body">
                        {
                            dataShown != null ?
                                dataShown.map((item, index) => {
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
                                }) : null
                        }
                    </tbody>
                </table>
                <div>{noMatch}</div>
            </div>
            <div>
            </div>
            <div className={`global_filter_container ${visibility}`}>
                <p>
                    showing {firstEntrie} to {data.length < 10 ? data.length : lastEntrie} of {data.length} entries
                </p>
                <div>
                    <div className="table_nav_container">
                        <button className="table_nav_button" onClick={() => { if (pageNumbers.length > 1 && offset != 1) { setOffset(offset - 1) } }}>Prev</button>
                        <nav className="table_nav">
                            <ul className="table_nav_list">
                                {
                                    pageNumbers.map(number => {
                                        const keys = `page_${number}`
                                        return (
                                            <li className="table_nav_items" key={keys} onClick={() => setOffset(number)}>
                                                <span style={{ color: offset === number ? "#539d83" : "#243400" }}>{number}</span>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </nav>
                        <button className="table_nav_button" onClick={() => { if (offset < pageNumbers.length) { setOffset(offset + 1) } }}>Next</button></div>
                </div>


            </div>
        </main>
    )
}

export default Table;

