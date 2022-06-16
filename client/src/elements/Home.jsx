import React from "react"
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const openBarSearch = () => {

        navigate('/BarSearch')

    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={openBarSearch}>Click here to go to /BarSearch</button>
        </div>

    )
}

export default Home