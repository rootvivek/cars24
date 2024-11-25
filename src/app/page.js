'use client'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Messages from './components/Message';
//import Footer from './components/footer';
  

function App() {
  return (
    <Router>
      <div className='container'>
         <div className="row">
              <div className="col">
                <Navbar />
              </div>
            </div>
          <div className="row">
              <div className='col-12 d-inline-flex justify-content-between'>
                <div className='col-3 '>
                  <Sidebar />
                </div>
                <div className='col-9 outlet'>
                  <div className="content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/settings/*" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/messages" element={<Messages />} />
                  </Routes>
                </div>
              </div>
             </div>
           </div>
          <Footer/>
      </div>
    </Router> 
  )
}

export default App;

