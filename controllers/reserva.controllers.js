const Reserva = require("../models/Reserva.js")

const ctrlReservas = {
    getReservas: async function (req, res) {
         try {
            const allReservas = await Reserva.findAll()

            if (!allReservas || allReservas.length === 0) {
                throw ({
                    status: 404,
                    message: 'No hay Reservas'
                })
            }

            return res.json(allReservas)
         } catch (error) {
            res.status(error.status || 500).json(error.message || 'Error interno del servidor');
         }
    },
    createReservas: async function (req, res) {
        const {name, surname, email, date} = req.body;

        try {
            const reserva = await Reserva.create({
                name,
                surname,
                email,
                date
            });
    
            if (!reserva) {
                throw ({
                    status: 400,
                    message: 'No se pudo crear la reserva'
                })
            }
    
            return res.json(reserva);
        } catch (error) {
           res.status(error.status || 500).json(error.message || 'Error interno del servidor');
        }
    },
    updateReservas: async function (req, res) {
        const { cod_reserva } = req.params;
        const { name, surname, email, date } = req.body;

        try {
            const reservaActualizada = await Reserva.update({
                name,
                surname,
                email,
                date
            }, {
                where: {
                    cod_reserva
                }
            });
    
            if (!reservaActualizada) {
                throw ({
                    status: 400,
                    message: 'No se pudo actualizar la reserva'
                })
            }
    
            return res.json({
                message: 'Reserva actualizada correctamente',
                reservaActualizada
            });
        } catch (error) {
           res.status(error.status || 500).json(error.message || 'Error interno del servidor');
        }
    },
    deleteReservas: async function (req, res) {
        const { cod_reserva } = req.params;

        try {
            const reservaEliminada = await Reserva.destroy({
                where: {
                    cod_reserva
                }
            });
    
            if (!reservaEliminada) {
                throw ({
                    status: 400,
                    message: 'No se pudo eliminar la reserva'
                })
            }
    
            return res.json({reservaEliminada, message: 'Reserva eliminada correctamente' });
        } catch (error) {
           res.status(error.status || 500).json(error.message || 'Error interno del servidor');
        }
    }
};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica

module.exports = ctrlReservas;