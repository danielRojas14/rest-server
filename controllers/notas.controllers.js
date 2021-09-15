const ctrlHome = {};
// const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/notas');
const nota = require('../models/notas');

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
    const notas = await nota.find({estado:true}) // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(notas);
}

// Controlador que almacena una nueva persona
ctrlHome.rutaPost = async (req, res) => {
    const { titulo, descripcion} = req.body;
    const notasInsert = new nota({titulo, descripcion, estado: true});
    await notasInsert.save() 

    res.json({msg: 'Nota creada correctamente'});
}

// Controlador que actualiza información de las personas
ctrlHome.rutaPut = async (req, res) => {
    const {titulo, descripcion, id } = req.body

    const notas = await nota.findByIdAndUpdate(id, {titulo, descripcion}, { new: true })

    res.json({
        msg: 'nota actualizada correctamente',
        notas
    })
}

ctrlHome.deleteNotas = async (req, res) => {
    console.log("req.params");
    const { id }  = req.body
    const Nota = await nota.findByIdAndUpdate(id, { estado: false }, { new: true });

    // Respuesta del servidor
    res.json({
        msg: 'Nota eliminada correctamente',
        Nota
    });
}


// // modi (Eliminación lógica)
// ctrlHome.rutaPut = async (req, res) => {
//     const { id }  = req.body
//     const notas = await nota.findByIdAndUpdate(id, { estado: false }, { new: true });

//     // Respuesta del servidor
//     res.json({
//         msg: 'nota eliminada correctamente',
//         notas
//     });
// }




module.exports = ctrlHome;