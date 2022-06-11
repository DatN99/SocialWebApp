const express = require("express")
const app = express()
const mongoose = require("mongoose")


/* Connect to MongoDB */
mongoose.connect("mongodb+srv://dbUsername123:dbP@ssword123@cluster0.zwu1a.mongodb.net/UserDatabase?retryWrites=true&w=majority")


/* Connect to server using Express*/
app.listen(3001, () => {console.log("Serving Starting...")})