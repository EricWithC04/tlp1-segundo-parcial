// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const { getReservas, createReservas, updateReservas, deleteReservas } = require("../controllers/reserva.controllers.js");


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/', getReservas);
 
// Crear una reserva
router.post('/', createReservas);
 
// Actualizar una reserva
router.put('/:cod_reserva', updateReservas);
 
// Eliminar una reserva de forma lógica
router.delete('/:cod_reserva', deleteReservas);

 
 module.exports = router;