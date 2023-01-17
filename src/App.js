import React, {useState, useEffect} from 'react';
import Manual from './pages/private/manual/Manual';
import Summary from './pages/private/summary/Summary';
import HomeLayout from './pages/private/homeLayout/HomeLayout';
import Signup from './pages/public/signup/Signup';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Signin from './pages/public/signin/Signin';
import History from './pages/private/history/History';
import Categories from './pages/private/categories/Categories';
import Charts from './pages/private/charts/Charts';
import ChangeCurrency from './pages/private/change currency/ChangeCurency';

function App() {
  return (
    <Router>                            
        <Routes>   
          <Route path="/home" element={<HomeLayout/>}>
            <Route index element={<Summary/>}/> 
            <Route path='summary' element={<Summary/>}/> 
            <Route path='history' element={<History />}/>
            <Route path='categories' element={<Categories />}/>
            <Route path='charts' element={<Charts />}/>
            <Route path='changeCurrency' element={<ChangeCurrency />}/>          
            <Route path='manual' element={<Manual/>}/>
          </Route>                                                                    
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>                    
    </Router>
  );
}

export default App;
