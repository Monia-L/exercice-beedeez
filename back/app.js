// Imports 
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors')

// Getting all routes
const routes = require("./routes/get_data")



// Instantiate server
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());


// Body Parser configuration
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
// Routes
app.use("/beedeez", routes)

app.get('/', (req, res) => {
    // console.log(res.json(results.data))
    res.send('Ok je suis dans /');
});

module.exports = app;