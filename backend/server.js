const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Backend del POS funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});