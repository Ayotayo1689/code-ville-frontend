
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css"
import LoginSignup from './pages/LoginSignup';
import DataBundle from './pages/Databundle';
import DataBundleDetails from './pages/DataDetails';
import Electricity from './pages/Electricity';
import MyTask from './pages/MyTask';


const  App = ()=> {
  
  return (
    <div className="App">
      <Routes>
     
        <Route path="/" element={<LoginSignup />} />
        <Route path="data_bundle" element={<DataBundle />} />
        <Route path="data_bundle/details" element={<DataBundleDetails />} />
        <Route path="tasks" element={<Electricity />} />
        <Route path="my-tasks" element={<MyTask />} />
      </Routes>
    </div>
  );
}

export default App;