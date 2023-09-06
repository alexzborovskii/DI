const express = require('express');

const i_router = express.Router();

i_router.get('/', (req, res) => {
    res.status(200).json({msg: "homepage"});
})

i_router.get('/About', (req, res) => {
    res.status(200).json({msg: "About Page"});
})

module.exports = {i_router}