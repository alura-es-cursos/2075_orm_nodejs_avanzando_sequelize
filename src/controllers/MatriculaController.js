const Sequilize = require('sequelize');
const MatriculaServices = require('../services/MatriculaServices.js');
const Controller = require('./Controller.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor(){
    super(matriculaServices);
  }

  async consultaMatriculasConfirmadas(req, res) {
    try {
      const { estudiante_id } = req.params;

      const listaRegistros = await matriculaServices.consultaYCuentaRegistros({
        where: {
          estudiante_id: Number(estudiante_id),
          status: 'matriculado',
        },
        limit: 2,
        order: [['id','DESC']]
      });
      return res.status(200).json(listaRegistros);

    } catch(error) {
      return res.status(500).json({msg:error.message});
    }
  }

  async consultarCursosCompletos(req, res) {
    try {
      const maxCantidadEstudiantes = 2;
      const listaRegistros = await matriculaServices.consultaYCuentaRegistros({
        where: {
          status: 'matriculado',
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequilize.literal(`COUNT(*) >= ${maxCantidadEstudiantes}`),
      });
      return res.status(200).json(listaRegistros.count);

    } catch(error) {
      return res.status(500).json({msg:error.message});
    }
  }
}

module.exports = MatriculaController;