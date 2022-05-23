import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./employees.scss"
import { useSelector, useDispatch } from "react-redux";
import TableBody from "components/displayEmployees/tableBody/TableBody";
import TableHeader from "components/displayEmployees/tableHeader/TableHeader";
import { useEffect } from "react";
import { upDateAction } from "redux/employeeSlice";
import MenuSelect from "components/displayEmployees/menuSelect/MenuSelect";
import SearchBar from "components/displayEmployees/searchBar/SearchBar";
import TableFooter from "components/displayEmployees/tableFooter/TableFooter";


function Employees_list() {


    const upDatedEmployeeSelector = useSelector(state => state.employee.upDatedEmployees)
    const employeesSelector = useSelector(state => state.employee.employees)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(upDateAction(employeesSelector))
    }, [])



    return (
        <div>
            <Header />
            <main className="main_container_employee">
                <div className="global_filter_container">
                    <MenuSelect data={employeesSelector} />
                    <SearchBar initialData={employeesSelector} />
                </div>
                <div className="tab_containers">
                    <table className="employee_table">
                        <TableHeader data={upDatedEmployeeSelector} />
                        <TableBody data={upDatedEmployeeSelector} />
                    </table>
                    <TableFooter data={upDatedEmployeeSelector} />
                </div>
            </main >
            <Footer />
        </div >
    )
}

export default Employees_list;