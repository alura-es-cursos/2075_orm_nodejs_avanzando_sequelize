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
      res.status(500).json(error);
    }
  }
}

module.exports = PersonaController;