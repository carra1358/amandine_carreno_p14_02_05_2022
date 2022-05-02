import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./view/Home/Home"
import "./index.scss"







const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>)