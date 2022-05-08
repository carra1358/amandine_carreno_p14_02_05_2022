import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./view/Home/Home"
import "./index.scss"
import Employees_list from './view/Employees/Employees_list';







const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees_list />} />
      </Routes>
    </Router>
  </React.StrictMode>)