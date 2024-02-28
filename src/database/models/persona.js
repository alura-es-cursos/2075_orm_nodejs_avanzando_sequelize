'use strict';
const {
  Model
} = require('sequelize');
const { verificarDNI } = require('../../helpers/validadores.js');

module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {

    static associate(models) {
      Persona.hasMany(models.Curso, {
        foreignKey: 'docente_id',
      });

      Persona.hasMany(models.Matricula, {
        foreignKey: 'estudiante_id',
        as: 'cursosMatriculados',
        scope: {
          status: 'matriculado'
        }
      });

      Persona.hasMany(models.Matricula, {
        foreignKey: 'estudiante_id',
        as: 'todasLasMatriculas',
        
      });
    }
  }
  Persona.init({
    nombre: {
      type:DataTypes.STRING,
      validate: {
        len: {
          args: [3,50],
          msg: 'El nombre debe tener al menos 3 caracteres y como máximo 50'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'El formato del email no es válido',
        }
      },

    },
    dni: {
      type:DataTypes.STRING,
      validate: {
        isDNIValido: (valorDNI) => {
          if (!verificarDNI(valorDNI)) {
            throw new Error('El valor del DNI no es válido');
          }
        }
      }
    },
    activo: DataTypes.BOOLEAN,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
    tableName: 'personas',
    paranoid: true,
    defaultScope: {
      where: {
        activo: true,
      },
    },
    scopes: {
      todosLosRegistros: {
        where: {},
      },
    }
  });
  return Persona;
};