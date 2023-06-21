// Imports
const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");
const path = require('path');
require("dotenv").config();
const port = process.env.PORT;
const app = express();

// Middlewares
// TODO: Implementar middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(/* 45635 */ port, () => console.log(`Server on port ${port}`));