import propTypes from "prop-types"
const { default: ButtonSort } = require("../ButtonSort/ButtonSort")


function TableHeader({ data }) {
    return (
        <thead className="employee_table_header">
            <tr>
                <td>First Name <span className="table_cell_filter"><ButtonSort data={data} property="firstName" /></span></td>
                <td>Last Name <span className="table_cell_filter"><ButtonSort data={data} property="lastName" /></span></td>
                <td>Start Date <span className="table_cell_filter"><ButtonSort data={data} property="startDate" /></span></td>
                <td>Department <span className="table_cell_filter"><ButtonSort data={data} property="dpt" /></span></td>
                <td>Date of Birth <span className="table_cell_filter"><ButtonSort data={data} property="birth" /></span></td>
                <td>Street <span className="table_cell_filter"><ButtonSort data={data} property="street" /></span></td>
                <td>City <span className="table_cell_filter"><ButtonSort data={data} property="city" /></span></td>
                <td>State <span className="table_cell_filter"><ButtonSort data={data} property="state" /></span></td>
                <td>Zipcode <span className="table_cell_filter"><ButtonSort data={data} property="zipCode" /></span></td>
            </tr>
        </thead>
    )
}

export default TableHeader;

TableHeader.propTypes = {
    data: propTypes.array,
}