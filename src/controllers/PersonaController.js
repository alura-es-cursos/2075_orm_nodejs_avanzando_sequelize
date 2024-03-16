const Controller = require('./Controller.js');
const PersonaServices = require('../services/PersonaServices.js');

const personaServices = new PersonaServices();

class PersonaController extends Controller {
  constructor(){
    super(personaServices);
  }

  async consultaMatriculasActivas(req, res) {
    const { estudiante_id } = req.params;
    try {
      const listaMatriculas = await personaServices.consultaMatriculasActivasEstudiante(estudiante_id);
      res.status(200).json(listaMatriculas);

    } catch(error) {
      return res.status(500).json({msg:error.message});
    }
  }

  async consultaTodasLasMatriculas(req, res) {
    const { estudiante_id } = req.params;
    try {
      const listaMatriculas = await personaServices.consultaTodasLasMatriculas(estudiante_id);
      res.status(200).json(listaMatriculas);

    } catch(error) {
      return res.status(500).json({msg:error.message});
    }
  }

  async consultaTodasLasPersonas(req, res) {
    try {
      const listaPersonas = await personaServices.consultaTodasLasPersonas();
      res.status(200).json(listaPersonas);
    } catch(error) {
      return res.status(500).json({msg:error.message});
    }
  }

  async desactivaEstudianteYMatriculas(req, res) {
    const { estudiante_id } = req.params;

    try {
      await personaServices.desactivaPersonaYMatriculas(Number(estudiante_id));
      res.status(200).json({msg: `Matriculas del Estudiante con Id: ${estudiante_id} se desactivaron`});
    } catch(error) {
      return res.status(500).json({msg:error.message});
    }
  }
}

module.exports = PersonaController;