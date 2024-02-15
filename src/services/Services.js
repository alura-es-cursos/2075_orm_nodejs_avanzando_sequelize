const db = require('../models');

class Services {
  constructor(modelName){
    this.model = modelName;
  }

  async consultaTodos() {
    return db[this.model].findAll();
  }

  async consultaPorId(id) {
    return db[this.model].findByPk(id);
  }

  async crearRegistro(datosDelRegistro) {
    return db[this.model].create(datosDelRegistro);
  }

  async actualizarRegistro(datosDelRegistro, id) {
    const resultadoOperacion = await db[this.model].update(datosDelRegistro, { where: { id: id } });

    if (resultadoOperacion[0] === 0)
      return false;
    return true;
  }

  async borrarRegistro(id) {
    return db[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;