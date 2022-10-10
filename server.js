const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 8000

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => console.log(`Server is running on the port:${PORT}`));