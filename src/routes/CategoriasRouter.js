const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();
const router = Router();

router.get('/categorias', (req, res) => {
  categoriaController.consultaTodos(req, res);
});

router.get('/categorias/:id', (req, res) => {
  categoriaController.consultaPorId(req, res);
});

router.post('/categorias', (req, res) => { 
  categoriaController.crearRegistro(req, res);
});

router.put('/categorias/:id', (req, res) => { 
  categoriaController.actualizarRegistro(req, res);
});

router.delete('/categorias/:id', (req, res) => {
  categoriaController.borrarRegistro(req, res);
});

module.exports = router;

