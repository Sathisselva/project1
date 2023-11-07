import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';


function App() {
  return (
    <>
    <Router>
        <Navbar/> 
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/products' exact element={<Products/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
