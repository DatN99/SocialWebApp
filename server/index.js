const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')


/* For reading POST body in JSON format*/
app.use(express.json())

app.use(cors())

/* Connect to MongoDB (password requires percent encoding) */
mongoose.connect("mongodb+srv://dbUsername123:dbPassword123@cluster0.zwu1a.mongodb.net/UserDatabase?retryWrites=true&w=majority")

/* Handle GET request */
app.get("/getUser", (req, res) => {

    const username = req.query.username
    const password = req.query.password
    
    UserModel.find({username: username, password:password}, (err, result) => {
        if (err) {
            res.json(err)
        }

        else {
            res.json(result)
        }
    })
    


})

/* Handle POST request for creating user */
app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

/* Handle POST request for logging in user */
app.get("/login", (req, res) => {

    const username = req.query.username
    const password = req.query.password 

    UserModel.find({username: username, password: password}, (err, result) => {
        if (err) {
            res.json(err)
        }

        if (result.length == 0) {
            console.log("Nothing found")
            
        }

        else {
            console.log("User found")

            /* sends info back to client */
            res.json(result)

        }

    })

})


/* Connect to server using Express*/
app.listen(3001, () => {console.log("Serving Starting...")})