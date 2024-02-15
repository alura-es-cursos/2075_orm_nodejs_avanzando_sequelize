const Services = require('./Services.js');

class PersonaServices extends Services {
  constructor(){
    super('Persona');
  }

  async consultaMatriculasEstudiante(id) {
    const estudianteModel = await super.consultaPorId(id);
    const listaMatriculas = await estudianteModel.getCursosMatriculados();

    return listaMatriculas;
  }
}

module.exports = PersonaServices;