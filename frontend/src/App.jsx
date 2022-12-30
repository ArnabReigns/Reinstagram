import { useState,useEffect } from 'react'
import Start from './pages/Start';
import Profile from './pages/Profile';
import {UserState} from './context/UserContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">

      <UserState>
      <Router>
        <Routes>
          <Route exact path='/' element={<Start/>} />
          <Route path='/profile/:username' element={<Profile/>} />
        </Routes>
      </Router>
      </UserState>
    </div>
  )
}

export default App
