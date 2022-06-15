import React from "react"
import { useEffect, useState } from 'react'
import Axios from "axios"
import AccountInfo from "./AccountInfo"
import {useNavigate} from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate()
    
    
  const [UserList, setUserList] = useState([])

  /* for displaying user info user */
  const [first_name, setFirstname] = useState("")
  const [last_name, setLastname] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  /* for logging in user */
  const [login_username, setLoginuser] = useState("")
  const [login_password, setLoginpass] = useState("")

  

  

  /* Creates new user */
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      first_name,
      last_name,
      age,
      email,
      username,
      password
    })
    .then((response) => {
      alert("Account Created!")
      setUserList([...UserList, {first_name, last_name, age, email, username, password}])
    })
    
  }

  /* Login User */
  const loginUser = () => {
    Axios.get("http://localhost:3001/login", {
      params: {
        username: login_username,
        password: login_password
      }
    })
    .then((response) => {
      alert("Logged in")  
      navigate('/AccountInfo', {state:{username:login_username, password:login_password}})
    })
    
  }


  return (

      <>
      <div className="Create Account">
          <div>
              <input type="text" placeholder="First Name"
                  onChange={(event) => setFirstname(event.target.value)}
              ></input>

              <input type="text" placeholder="Last Name"
                  onChange={(event) => setLastname(event.target.value)}
              ></input>

              <input type="number" placeholder="Age"
                  onChange={(event) => setAge(event.target.value)}
              ></input>

              <input type="text" placeholder="Email Address"
                  onChange={(event) => setEmail(event.target.value)}
              ></input>

              <input type="text" placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
              ></input>

              <input type="password" placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
              ></input>

              <button onClick={createUser}> Create User</button>
          </div>

      </div>
      
      <div className="Login">
              <div>
                  <input type="username" placeholder="Username"
                      onChange={(event) => setLoginuser(event.target.value)}
                  ></input>
                  <input type="password" placeholder="Password"
                      onChange={(event) => setLoginpass(event.target.value)}
                  ></input>

                  <button onClick={loginUser}>Login</button>

              </div>

          </div>
          </>
    
    
  );
  

}

export default Login