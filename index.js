const express = require('express')
const app = express()
const router = require("./routes")

//middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

//port
const PORT = process.env.PORT || 3000

//server
app.listen(PORT, () =>{
    console.log("server is running on port 3000")
})