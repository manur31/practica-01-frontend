const express = require('express');
const path = require('path');
const cors = require('cors');
const contactos = require('./server');
const app = express();
const Port = 3005;

app.use(cors());

app.get('/api', (req, res) => {
  res.status(200).json({ info: contactos });
});

app.listen(Port, () => {
  console.log(`Servidor escuchando en el puerto: ${Port}`);
});