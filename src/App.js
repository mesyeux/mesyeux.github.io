import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import { JobPage } from './components/pages/JobPage';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/idk' element={<JobPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
