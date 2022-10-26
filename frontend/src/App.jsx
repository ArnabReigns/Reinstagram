import { useState,useEffect } from 'react'
import Start from './pages/Start';
import Accounts from './components/Accounts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Start/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
