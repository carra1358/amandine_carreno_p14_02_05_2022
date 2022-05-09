// import { useForm } from "react-hook-form";
import { useState } from 'react';
import DatePicker from 'react-date-picker'
import { states } from './formState';
import "./form.scss"

function Form() {
    const [startDate, setStratDate] = useState();
    const [birthDate, setBirthDate] = useState();

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
                <div className="input_date">
                    <label htmlFor="birth">Date of Birth</label>
                    <DatePicker onChange={(date) => setBirthDate(date)} value={birthDate} id="Birth" dayPlaceholder='dd' monthPlaceholder="mm" yearPlaceholder="yyyy" />
                </div>
                <div className='input_date'>
                    <label htmlFor="startDate">Start Date</label>
                    <DatePicker onChange={(date) => setStratDate(date)} value={startDate} id="startDate" dayPlaceholder='dd' monthPlaceholder="mm" yearPlaceholder="yyyy" />
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
                        <select id='state'>
                            {states.map((state) => {
                                return (
                                    <option key={state.abbreviation} value={state.name}>{state.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="inputs">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="dpt">Departement</label>
                        <select id='dpt'>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                    <div className='submit_button'><button type="submit">Save</button></div>
                </div>
            </form>

        </>
    )

}

export default Form;