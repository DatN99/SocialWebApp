import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const AccountInfo = () => {
    
    const location = useLocation()

    const [Infolist, setInfolist] = useState([])

    
     /* for creating user */
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {

        console.log("useEffect called")

        Axios.get("http://localhost:3001/getUser", {
            params: {
                username: location.state.username,
                password: location.state.password
            }
        })
        .then((response) => {

            setInfolist(response.data)
        })
    }, [])


    return (
        <div className="AccountInfo">
            <div className="InfoDisplay">
                {Infolist.map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.first_name + " " + user.last_name}</h1>
                            <h1>Age: {user.age}</h1>
                            <h1>Email: {user.email}</h1>
                        </div>
                    )
                })}
            </div>
            
        </div>


    )

}

export default AccountInfo