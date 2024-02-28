const Services = require('./Services.js');

class PersonaServices extends Services {
  constructor(){
    super('Persona');
  }

  async consultaMatriculasActivasEstudiante(id) {
    const estudianteModel = await super.consultaPorId(id);
    const listaMatriculas = await estudianteModel.getCursosMatriculados();

    return listaMatriculas;
  }

  async consultaTodasLasMatriculas(id) {
    const estudianteModel = await super.consultaPorId(id);
    const listaMatriculas = await estudianteModel.getTodasLasMatriculas();

    return listaMatriculas;
  }

  async consultaTodasLasPersonas() {
    const listaRegistros = await super.consultaPorAmbito('todosLosRegistros');
    return listaRegistros;
  }
}

module.exports = PersonaServices;