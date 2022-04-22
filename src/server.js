const express = require('express');
const routes = require('./routes');
const db = require('./database');

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);


app.listen(4000, () => console.log("Servidor ON na porta 4000"));