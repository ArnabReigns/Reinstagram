import { useState,useEffect } from 'react'
import Home from './pages/Home';
import Accounts from './pages/Accounts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='register/' element={<Accounts/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
