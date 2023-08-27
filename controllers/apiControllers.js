const { VideoGame } = require('../models/juegos')



const apicontroller = {
    async informacion(req, res) {

        const list = await VideoGame.find();
        res.status(200).json(list)
    },
    async buscarPorId(req, res) {
        console.log('estoy en el controlador')
        const busqueda = await VideoGame.findById(req.params.id);
        res.status(200).json(busqueda)
    },
    async buscarPorGenero(req, res) {
        try {
            const genero = req.params.genero;
            const pipeline = [
                {
                    $match: {
                        $or: [
                            { genero: { $regex: `.*${genero}.*`, $options: 'i' } },
                            { genero: { $regex: `.*${genero}.*`, $options: 'i' } }
                        ]
                    }
                },
                { $limit: 5 }
            ];
            const busqueda = await VideoGame.aggregate(pipeline);
            res.status(200).json(busqueda);
        } catch (error) {
            res.status(500).json({ error: 'error no se encuentra eso' });
        }
    },
    async busquedaPorNombre(req, res) {
        try {
            const nombre = req.params.nombre;
            const pipeline = [
                {
                    $match: {
                        $or: [
                            { nombre: { $regex: `.*${nombre}.*`, $options: 'i' } },
                            { nombre: { $regex: `.*${nombre}.*`, $options: 'i' } }
                        ]
                    }
                },
                { $limit: 5 }
            ];
            const busqueda = await VideoGame.aggregate(pipeline);
            res.status(200).json(busqueda);
        } catch (error) {
            res.status(500).json({ error: 'error no se encuentra eso' });
        }
    },


    async busquedaPorPrecio(req, res) {

        const busqueda = await VideoGame.find({ precio: req.params.precio });
        res.status(200).json(busqueda)
    },
    async busquedaPorExclusivo(req, res) {

        const busqueda = await VideoGame.find({ exclusivo: req.params.exclusivo });
        res.status(200).json(busqueda)
    },
    async busquedaPorPlataforma(req, res) {
        try {
            const plataforma = req.params.plataforma;
            const pipeline = [
                {
                    $match: {
                        $or: [
                            { plataforma: { $regex: `.*${plataforma}.*`, $options: 'i' } },
                            { plataforma: { $regex: `.*${plataforma}.*`, $options: 'i' } }
                        ]
                    }
                },
                { $limit: 5 }
            ];
            const busqueda = await VideoGame.aggregate(pipeline);
            res.status(200).json(busqueda);
        } catch (error) {
            res.status(500).json({ error: 'error no se encuentra eso' });
        }
    },
    async busquedaPorClasificacion(req, res) {

        const busqueda = await VideoGame.find({ clasificacion: req.params.clasificacion });
        res.status(200).json(busqueda)
    },
    async busquedaPorEmpresa(req, res) {

        const busqueda = await VideoGame.find({ empresa: req.params.empresa });
        res.status(200).json(busqueda)
    },
    async busquedaPorFechaDeLanzamiento(req, res) {

        const busqueda = await VideoGame.find({ fechaLanzamiento: req.params.fechaLanzamiento });
        res.status(200).json(busqueda)
    },
    async busquedaPorDistribuidor(req, res) {
        try {
            const distribuidor = req.params.distribuidor;
            const pipeline = [
                {
                    $match: {
                        $or: [
                            { distribuidor: { $regex: `.*${distribuidor}.*`, $options: 'i' } },
                            { distribuidor: { $regex: `.*${distribuidor}.*`, $options: 'i' } }
                        ]
                    }
                },
                { $limit: 5 }
            ];
            const busqueda = await VideoGame.aggregate(pipeline);
            res.status(200).json(busqueda);
        } catch (error) {
            res.status(500).json({ error: 'error no se encuentra eso' });
        }
    },


    async crear(req, res) {
        try {
            const NewVideoGame = new VideoGame(req.body);
            await NewVideoGame.save();
            res.status(201).json(NewVideoGame)
        } catch (error) {
            res.status(400).json(error)
        }


    },
    async editar(req, res) {
        try {
            await VideoGame.findByIdAndUpdate(req.params.id, req.body)
            const busqueda = await VideoGame.findById(req.params.id)
            res.json(busqueda)
        } catch (error) {
            res.json(error)

        }

    },
    async eliminar(req, res) {
        await VideoGame.findByIdAndDelete(req.params.id)
        res.json({
            msg: "la informacion fue borrada del archivo" + req.params.id
        })
    },
}

module.exports = apicontroller