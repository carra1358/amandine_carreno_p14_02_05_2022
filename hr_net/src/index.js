import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./view/Home/Home"
import "./index.scss"
import Employees_list from './view/Employees/Employees_list';
import { Provider } from 'react-redux';
import store from "./redux/store"
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';



let persistor = persistStore(store)


const root = createRoot(document.getElementById('root'))

root.render(

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees_list />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>)