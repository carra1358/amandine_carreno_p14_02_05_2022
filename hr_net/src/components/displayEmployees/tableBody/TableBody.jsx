import propTypes from "prop-types"

function TableBody({ data }) {

    return (
        <tbody className="employee_table_body">
            {
                data.length > 0 ?
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
                    : <tr ><td colSpan={9}>the is no employee</td></tr>
            }
        </tbody>
    )
}

export default TableBody;

TableBody.propTypes = {
    data: propTypes.array,
}