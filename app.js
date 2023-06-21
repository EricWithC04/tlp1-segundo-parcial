// Imports
const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");
const path = require('path');
const { sequelize } = require("./database.js");
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

sequelize.authenticate()
    .then(() => console.log("Conexión a la base de datos exitosa!"))
    .catch((error) => console.log("Error al conectar con la base de datos!", error))

// Routes
app.use("/", require('./routes/index.routes.js'));
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(/* 45635 */ port, () => console.log(`Server on port ${port}`));