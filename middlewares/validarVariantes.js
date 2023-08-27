const { VideoGame } = require('../models/juegos');

const validarID = async (req, res, next) => {
    try {
        const busqueda = await VideoGame.findById(req.params.id);
        console.log('estoy en el middleware');
        if (busqueda !== null) {
            next();
        } else {
            res.status(404).json({
                msg: "El ID ingresado no es válido: " + req.params.id
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { validarID };
