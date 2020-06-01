const path = require('path');
const mysql = require('mysql');
var connection = require('../config/database');

module.exports = function(app, connection) {
    app.get('/', function(req,res) {
        connection.query('SELECT * FROM customers', function(err, data) {
            (err) ? res.send(err) : res.json()
        });
    });
}