import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc"
import "./employees.scss"
import { useSelector } from "react-redux";
import { useState } from "react";




function Employees_list() {


    const employees = useSelector(state => state.employee.employees)

    // simulate multiple employees -- start --
    let fill = 100;
    let i = 0
    let simulateData = [];
    do {
        simulateData.push(employees[0])
        i++
    } while (i < fill)

    // simulate multiple employees -- end --

    // show entrie filter function and Default value of 10/100
    const [data, setData] = useState(simulateData.splice(0, 10))
    const handleShowEntries = (data, range) => {
        const desiredEntries = data.splice(0, parseInt(range))
        setData(desiredEntries)
    }


    return employees.length >= 1 ? (
        <div>
            <Header />
            <main className="main_container_employee">
                <h1 className="title">Current Employee</h1>
                <div className="global_filter_container">
                    <div className="show_entries_wrapper">
                        <span>show</span>
                        <select name="entries" id="show_entries" onChange={(e) => handleShowEntries(simulateData, e.target.value)}>
                            <option value="10" >10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span>entries</span>
                    </div>
                    <div className="search_wrapper">
                        <label htmlFor="search">Search:</label>
                        <input type="text" id="search" />
                    </div>
                </div>
                <div className="tab_containers">
                    <table className="employee_table">
                        <thead className="employee_table_header">
                            <tr>
                                <td>First Name <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>Last Name <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>Start Date <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>Department <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>Date of Birth <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>Street <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>City <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>State <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                                <td>Zipcode <span className="table_cell_filter"><VscTriangleUp /><VscTriangleDown /></span></td>
                            </tr>
                        </thead>
                        <tbody className="employee_table_body">
                            {
                                data.map((item, index) => {
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
                </div>
                <div>
                </div>
                <div className="global_filter_container">
                    <p>
                        showing 1 of 1 entries
                    </p>
                    <div>
                        <p>prev <span>1</span> next</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    ) : "no employee"
}

export default Employees_list;