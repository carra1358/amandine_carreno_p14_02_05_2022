import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './employeeSlice';



/* eslint-disable no-underscore-dangle */
const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;