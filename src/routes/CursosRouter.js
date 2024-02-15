const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();
const router = Router();

router.get('/cursos', (req, res) => {
  cursoController.consultaTodos(req, res);
});

router.get('/cursos/:id', (req, res) => {
  cursoController.consultaPorId(req, res);
});

router.post('/cursos', (req, res) => { 
  cursoController.crearRegistro(req, res);
});

router.put('/cursos/:id', (req, res) => { 
  cursoController.actualizarRegistro(req, res);
});

router.delete('/cursos/:id', (req, res) => {
  cursoController.borrarRegistro(req, res);
});

module.exports = router;

