const db = require('../database/models');

class Services {
  constructor(modelName){
    this.model = modelName;
  }

  async consultaTodos(where = {}) {
    return db[this.model].findAll({ where: {...where}});
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

  async consultaYCuentaRegistros(options) {
    return db[this.model].findAndCountAll({...options});
  }

  async crearRegistro(datosDelRegistro) {
    return db[this.model].create(datosDelRegistro);
  }

  async actualizarRegistro(datosDelRegistro, where, transaction = {}) {
    const resultadoOperacion = await db[this.model].update(datosDelRegistro, 
      { 
        where: {...where },
        transaction: transaction
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