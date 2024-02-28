const db = require('../database/models');

class Services {
  constructor(modelName){
    this.model = modelName;
  }

  async consultaTodos() {
    return db[this.model].findAll();
  }

  async consultaPorAmbito(nombreAmbito) {
    return db[this.model].scope(nombreAmbito).findAll();
  }

  async consultaPorId(id) {
    return db[this.model].findByPk(id);
  }

  async consultaUnRegistro(where) {
    return db[this.model].findOne({ where: {...where} });
  }

  async crearRegistro(datosDelRegistro) {
    return db[this.model].create(datosDelRegistro);
  }

  async actualizarRegistro(datosDelRegistro, where) {
    const resultadoOperacion = await db[this.model].update(datosDelRegistro, 
      { where: {...where } 
      });

    if (resultadoOperacion[0] === 0)
      return false;
    return true;
  }

  async borrarRegistro(id) {
    return db[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;