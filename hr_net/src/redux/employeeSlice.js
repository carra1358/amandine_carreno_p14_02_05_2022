import { createSlice } from '@reduxjs/toolkit'



// redux slice: englobe innitial state and reducers and generate actions automatically
const employeeSlice = createSlice({

    name: "employee",

    initialState: {
        employees: []
    },
    upDatedEmployees: [],

    reducers: {

        // Save employee profil information
        createAction: (state, action) => {
            state.employees.push(action.payload)
            return state
        },
        upDateAction: (state, action) => {
            state.upDatedEmployees = action.payload
            return state
        },
    }

})

export const { createAction, upDateAction } = employeeSlice.actions;
export default employeeSlice.reducer;