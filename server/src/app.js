const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())


app.get('/server', (req, res) => {
    res.send('You are now conected to the server route')
})

let port = process.env.PORT || 5000;
app.listen( port , () => `Server is currently listening on ${port}`)