import propTypes from "prop-types"
import { useState } from "react";


function TableFooter({ data }) {

    const [firstEntrie, setFirstEntrie] = useState(0)
    const [lastEntrie, setLastEntrie] = useState(data.length)
    let pages = 1

    const NextPage = () => {
        setFirstEntrie(data.length + 1)
        setLastEntrie(data.length + 10)
    }

    const PreviousPage = () => {
        setFirstEntrie(data.length - 10)
        setLastEntrie(data.length)
    }


    return (
        <div className="global_filter_container">
            <p>
                showing {firstEntrie} to {lastEntrie} of {data.length} entries
            </p>
            <div>
                <div><button onClick={() => PreviousPage()}>Prev</button><span>{pages > 1 ? "1..." : "1"}</span><button onClick={() => NextPage()}>Next</button></div>
            </div>
        </div>
    )

}
export default TableFooter;

TableFooter.propTypes = {
    data: propTypes.array,
}