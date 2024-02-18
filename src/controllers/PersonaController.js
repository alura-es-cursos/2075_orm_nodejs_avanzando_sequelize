const Controller = require('./Controller.js');
const PersonaServices = require('../services/PersonaServices.js');

const personaServices = new PersonaServices();

class PersonaController extends Controller {
  constructor(){
    super(personaServices);
  }

  async consultaMatriculas(req, res) {
    const { id } = req.params;
    try {
      const listaMatriculas = await personaServices.consultaMatriculasEstudiante(id);
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
}

module.exports = PersonaController;