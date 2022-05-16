import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./view/Home/Home"
import "./index.scss"
import Employees_list from './view/Employees/Employees_list';
import { Provider } from 'react-redux';
import store from "./redux/store"







const root = createRoot(document.getElementById('root'))

root.render(

  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees_list />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>)