const express = require('express')
// const db = require('./data/db-config.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.json({ senity: 'check'})
});

module.exports = server
