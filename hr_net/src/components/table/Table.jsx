import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import "./table.scss"

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




    for (let i = 1; i <= Math.ceil(data.length / limit); i++) {
        pageNumbers.push(i);
    }

    const handleLimit = () => {
        console.log(data)
        if (data.length === 0) {
            setDataShown(null)
        }
        const result = data.slice(firstEntrie, lastEntrie)
        setDataShown(result)
    }


    const sortUp = (property) => {
        const result = data.sort((a, b) => {

            if (a[property] > b[property]) return 1;
            if (a[property] < b[property]) return -1;
            return 0;
        })
        setData(result)
        handleLimit()
    }

    const sortDown = (property) => {
        const result = data.sort((a, b) => {

            if (a[property] < b[property]) return 1;
            if (a[property] > b[property]) return -1;
            return 0;

        })
        setData(result)
        handleLimit()
    }

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

    const clearResult = () => {
        setOffset(1)
        setData([...initEmployees])
        handleLimit()
        setvisibility("visible")
    }

    useEffect(() => {
        const x = initEmployees.slice(firstEntrie, lastEntrie)
        setDataShown(x)
    }, [])


    useEffect(() => {
        handleLimit()
    }
        , [offset, limit])

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
                            <td>First Name <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("firstName")} /><VscTriangleDown onClick={() => sortDown("firstName")} /></span></td>
                            <td>Last Name <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("lastName")} /><VscTriangleDown onClick={() => sortDown("lastName")} /></span></td>
                            <td>Start Date <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("startDate")} /><VscTriangleDown onClick={() => sortDown("startDate")}></VscTriangleDown></span></td>
                            <td>Department <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("dpt")} /><VscTriangleDown onClick={() => sortDown("dpt")} /></span></td>
                            <td>Date of Birth <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("birth")} /><VscTriangleDown onClick={() => sortDown("birth")}></VscTriangleDown></span></td>
                            <td>Street <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("street")} /><VscTriangleDown onClick={() => sortDown("street")} /></span></td>
                            <td>City <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("city")} /><VscTriangleDown onClick={() => sortDown("city")} /></span></td>
                            <td>State <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("state")} /><VscTriangleDown onClick={() => sortDown("state")} /></span></td>
                            <td>Zipcode <span className="table_cell_filter"><VscTriangleUp onClick={() => sortUp("zipCode")} /><VscTriangleDown onClick={() => sortDown("zipCode")} /></span></td>
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
                    <div><button onClick={() => { if (pageNumbers.length > 1 && offset != 1) { setOffset(offset - 1) } }}>Prev</button>
                        <nav>
                            <ul>
                                {
                                    pageNumbers.map(number => {
                                        const keys = `page_${number}`
                                        return (
                                            <li key={keys} onClick={() => setOffset(number)}>
                                                {number}
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </nav>
                        <button onClick={() => { if (offset < pageNumbers.length) { setOffset(offset + 1) } }}>Next</button></div>
                </div>

            </div>
        </main>
    )
}

export default Table;