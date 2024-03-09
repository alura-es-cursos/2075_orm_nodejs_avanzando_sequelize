const { Router } = require('express');
const PersonaController = require('../controllers/PersonaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const personaController = new PersonaController();
const matriculaController = new MatriculaController();
const router = Router();

router.get('/personas', (req, res) => {
  personaController.consultaTodos(req, res);
});

router.get('/personas/todos', (req, res) => {
  personaController.consultaTodasLasPersonas(req, res);
});

router.get('/personas/:id', (req, res) => {
  personaController.consultaPorId(req, res);
});

router.post('/personas', (req, res) => { 
  personaController.crearRegistro(req, res);
});

router.put('/personas/:id', (req, res) => { 
  personaController.actualizarRegistro(req, res);
});

router.delete('/personas/:id', (req, res) => {
  personaController.borrarRegistro(req, res);
});

router.get('/personas/:estudiante_id/matriculas', (req, res) => { 
  personaController.consultaMatriculasActivas(req, res);
});

router.get('/personas/:estudiante_id/matriculas/todas', (req, res) => { 
  personaController.consultaTodasLasMatriculas(req, res);
});

router.get('/personas/:estudiante_id/matriculas/confirmadas', (req, res) => { 
  matriculaController.consultaMatriculasConfirmadas(req, res);
});

router.get('/personas/:estudiante_id/matriculas/:id', (req, res) => { 
  matriculaController.consultaUnRegistro(req, res);
});

router.get('/matriculas/completas', (req, res) => { 
  matriculaController.consultarCursosCompletos(req, res);
});


router.post('/personas/:estudiante_id/matriculas', (req, res) => { 
  matriculaController.crearRegistro(req, res);
});

router.put('/personas/:estudiante_id/matriculas/:id', (req, res) => { 
  matriculaController.actualizarRegistro(req, res);
});

router.delete('/personas/:estudiante_id/matriculas/:id', (req, res) => { 
  matriculaController.borrarRegistro(req, res);
});

module.exports = router;

