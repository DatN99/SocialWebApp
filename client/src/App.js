import './App.css';
import { useEffect, useState } from 'react'
import Axios from "axios"

function App() {

  const [UserList, setUserList] = useState([])

  /* for creating user */
  const [first_name, setFirstname] = useState("")
  const [last_name, setLastname] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  /* for logging in user */
  const [login_username, setLoginuser] = useState("")
  const [login_password, setLoginpass] = useState("")
  

  /* Updates User List (called immediately) */
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUserList(response.data) 
    })

  }, [])

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
    Axios.post("http://localhost:3001/login", {
      login_username,
      login_password
    })
    
  }
  

  return (
    <div className="App">
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
    </div>

  );
}

export default App;
