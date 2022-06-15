import './App.css';
import { useEffect, useState } from 'react'
import Axios from "axios"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"
import AccountInfo from "./elements/AccountInfo"
import Home from "./elements/Home"
import Login from "./elements/Login"

function App() {


  return (

    <div>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/AccountInfo" element={<AccountInfo/>}/>
          </Routes>
        </Router>
      </div>
    </div>

      
    
  );
}

export default App;
