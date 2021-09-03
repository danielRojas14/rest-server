const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaPut,deleteNotas
 } = require('../controllers/notas.controllers');

//  Ruta que devuelve todos las notas
router.get('/', rutaGet)

router.post('/', rutaPost)

// Actualizar las notas
router.put('/', rutaPut)



router.put('/deleteNotas', deleteNotas)

module.exports = router;
