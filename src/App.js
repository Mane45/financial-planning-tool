import React, {useState, useEffect} from 'react';
import Manual from './pages/private/manual/Manual';
import Summary from './pages/private/summary/Summary';
import HomeLayout from './pages/private/homeLayout/HomeLayout';
import Signup from './pages/public/signup/Signup';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Signin from './pages/public/signin/Signin';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Login />
  gggggggddddhhhh
    </div>
=======
    <Router>                            
        <Routes>   
          <Route path="/home" element={<HomeLayout/>}>
            <Route index element={<Summary/>}/> 
            <Route path='summary' element={<Summary/>}/> 
            <Route path='manual' element={<Manual/>}/>
          </Route>                                                                    
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>                    
    </Router>
>>>>>>> ec15937 (refactored project and added Registration, functional and routing)
  );
}

export default App;
