// import { useForm } from "react-hook-form";
import "./form.scss"

function Form() {
    return (
        <>
            <form>
                <div className="inputs">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="inputs">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" id="LastName" />
                </div>
                <div className="inputs">
                    <label htmlFor="birth">Date of Birth</label>
                    <input type="text" id="Birth" />
                </div>
                <div className="inputs">
                    <label htmlFor="Start">Start Date</label>
                    <input type="text" id="Start" />
                </div>
                <div className="adress">
                    <h4><span className="deco" />Adress<span className="deco" /></h4>
                    <div className="inputs">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="state">state</label>
                        <input type="text" id="state" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" />
                    </div>
                    <button type="submit">Save</button>
                </div>
            </form>

        </>
    )

}

export default Form;