const db = require('../database/models');
const Services = require('./Services.js');

class PersonaServices extends Services {
  constructor(){
    super('Persona');
    this.matriculaServices = new Services('Matricula');
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

  async desactivaPersonaYMatriculas(estudianteId) {
    return db.sequelize.transaction(async (transaction) => {
      await super.actualizarRegistro({activo: false},{ id: estudianteId }, transaction);
      await this.matriculaServices.actualizarRegistro({status: 'cancelado'},{ estudiante_id: estudianteId}, transaction);
    });
  
  }
}

module.exports = PersonaServices;