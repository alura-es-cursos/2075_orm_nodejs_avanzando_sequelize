'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {

    static associate(models) {
      Persona.hasMany(models.Curso, {
        foreignKey: 'docente_id',
      });

      Persona.hasMany(models.Matricula, {
        foreignKey: 'estudiante_id',
        as: 'cursosMatriculados',
      });
    }
  }
  Persona.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.STRING,
    activo: DataTypes.BOOLEAN,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
    tableName: 'personas'
  });
  return Persona;
};