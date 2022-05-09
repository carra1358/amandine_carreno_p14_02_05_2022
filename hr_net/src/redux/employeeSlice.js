import { createSlice } from '@reduxjs/toolkit'


// redux slice: englobe innitial state and reducers and generate actions automatically
const employeeSlice = createSlice({

    name: "employee",

    initialState: {
        employeeProfil: {
            firstName: null,
            lastName: null,
            dateOfBirth: null,
            startDate: null,
            Adress: {},
            departement: null
        }

    },

    reducers: {

        // Save employee profil information
        createAction: (state, action) => {
            state.employeeProfil = action.payload
        },


    }

})

export const { createAction } = employeeSlice.actions;
export default employeeSlice.reducer;