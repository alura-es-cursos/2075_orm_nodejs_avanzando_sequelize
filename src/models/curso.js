'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curso.hasMany(models.Matricula, {
        foreignKey: 'curso_id',
      });
      Curso.belongsTo(models.Persona,{
        foreignKey: 'docente_id'
      });
      Curso.belongsTo(models.Categoria,{
        foreignKey: 'categoria_id'
      });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos',
  });
  return Curso;
};