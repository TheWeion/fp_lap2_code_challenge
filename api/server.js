const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const server = express();
server.use(cors());
server.use(express.json());


server.use('/post', postRoutes);

server.get('/', (_req, res) => res.send('Welcome to our post repository!'));

module.exports = server;
