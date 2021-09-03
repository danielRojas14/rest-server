const { model, Schema } = require('mongoose');

const NotasSchema = new Schema({

    titulo: { type: String },
    descripcion: { type: String },
    estado:{type: Boolean,
            default: true}
});


module.exports = model('Notas', NotasSchema);