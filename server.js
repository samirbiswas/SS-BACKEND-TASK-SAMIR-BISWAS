const express = require("express")
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { connect } = require('mongoose')
const router = require('./Routes')
const app = express()

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(router);

app.use((err, req, res, next) => {
    const message = err.message ? err.message : 'Server Error Occured';
    const status = err.status ? err.status : 500
    res.status(status).json({ message })
});

connect('mongodb://127.0.0.1:27017/sayburgh_solutions_db')
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => console.log(err));


const PORT = process.env.PORT || 4005
app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
});


