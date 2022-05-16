import { useForm } from "react-hook-form";
import { states } from './formState';
import "./form.scss"
import { useDispatch } from "react-redux";
import { createAction } from "redux/employeeSlice";
import { useRef, useState } from "react";
import Modal from "components/modal/Modal";


function Form() {

    const validation = {
        minTextInput: 2,
        minCity: 3,
        zipCode: 5,
    }


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isValid, setIsValid] = useState(true)
    const form = useRef()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(createAction(data))
        setIsValid(true)
        form.current.reset()
    };


    return (
        <>
            {isValid ? <Modal visibility="visible" closeModal={() => setIsValid(false)} /> : <Modal visibility="hidden" />}
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                <div className="inputs">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" id="firstName" {...register("firstName", { required: true, minLength: validation.minTextInput })} />
                </div>
                <div className="error_message"><span>{errors.firstName && "First Name is required with at least 2 letters"}</span></div>
                <div className="inputs">
                    <label htmlFor="lastName">LastName</label>
                    <input type="text" id="LastName" {...register("lastName", { required: true, minLength: validation.minTextInput })} />
                </div>
                <span className="error_message">{errors.lastName && "Last Name is required with at least 2 letters"}</span>
                <div className="inputs">
                    <label htmlFor="birth">Date of Birth</label>
                    <input type="date" id="birth"  {...register("birth", { required: true })} />
                </div>
                <span className="error_message">{errors.birth && "Birth's Date is required"}</span>
                <div className='inputs'>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" {...register("startDate", { required: true })} />
                </div>
                <span className="error_message">{errors.startDate && "Start Date is required"}</span>
                <div className="adress">
                    <h4><span className="deco" />Adress<span className="deco" /></h4>
                    <div className="inputs">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" {...register("street", { required: true, minLength: validation.minTextInput })} />
                    </div>
                    <span className="error_message">{errors.street && "Invalid street"}</span>
                    <div className="inputs">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" {...register("city", { required: true, minLength: validation.minCity })} />
                    </div>
                    <span className="error_message">{errors.city && "Invalid City"}</span>
                    <div className="inputs">
                        <label htmlFor="state">state</label>
                        <select id='state' {...register("state", { required: true })} >
                            <option value="">Select a state</option>
                            {states.map((state) => {
                                return (
                                    <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <span className="error_message">{errors.state && "A State must be selected"}</span>
                    <div className="inputs">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" {...register("zipCode", { required: true, minLength: validation.zipCode, maxLength: validation.zipCode })} />
                    </div>
                    <span className="error_message">{errors.zipCode && "Invalid Zip Code"}</span>
                    <div className="inputs">
                        <label htmlFor="dpt">Departement</label>
                        <select id='dpt' {...register("dpt", { required: true })}>
                            <option value="">Select a departement</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                    <span className="error_message">{errors.dpt && "A Departement must be selected"}</span>
                    <div className='submit_button'><button type="submit">Save</button></div>
                </div>
            </form>


        </>
    )

}

export default Form;