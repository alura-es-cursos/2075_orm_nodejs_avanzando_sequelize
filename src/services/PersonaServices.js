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

  async consultaTodasLasPersonas() {
    const listaRegistros = await super.consultaPorAmbito('todosLosRegistros');
    return listaRegistros;
  }
}

module.exports = PersonaServices;