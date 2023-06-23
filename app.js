const express = require("express");
const app = express();
const port = 3000;
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

var Connection = require('tedious').Connection;
var config = {
    server: 'SINDY\SQLEXPRESS01',
    authentication: {
        type: 'default',
        options: {
            userName: 'SINDY\hern',
            password: 'sindy2023'
        }

    },
    options: {

        encrypt: true,
        database: 'ventas'
    }
};

var connection = new Connection(config);
connection.on('connect', function (err) {
    console.log("Ingreso");
});

connection.connect();

