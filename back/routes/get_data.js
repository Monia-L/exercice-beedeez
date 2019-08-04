//import axios from 'axios';
const express = require("express")
// Router
const router = express.Router();


router.get("/all",(req, res) => {
    res.status(200).send('Je suis à la racine de /all')
});


module.exports = router;