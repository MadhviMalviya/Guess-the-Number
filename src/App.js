import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from './components/HomePage/Home';
import Registr from './components/RegistrPage/Registr';
import Login from './components/LoginPage/Login';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Registr' element={<Registr/>}/>
</Routes>
    </div>
  );
}

export default App;
