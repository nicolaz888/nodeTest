const express = require('express');
const { dbConnection } = require('./db/db-config');
require('dotenv').config();

const app = express();

//database part
dbConnection();

app.get('/api', (req, res) => {
    console.log('entro a la primera peticion!');

    res.send({
        ok: true,
        message: ':D'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}`);
});

