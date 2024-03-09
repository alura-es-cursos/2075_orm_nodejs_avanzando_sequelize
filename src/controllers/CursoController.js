const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor(){
    super(cursoServices);
  }

  async consultaCursos(req, res) {
    const { fecha_inicial, fecha_final } = req.query;
    const where = {};
    
    fecha_inicial || fecha_final ? where.fecha_inicio = {} : null;
    fecha_inicial ? where.fecha_inicio[Op.gte] = fecha_inicial : null;
    fecha_final ? where.fecha_inicio[Op.lte] = fecha_final : null;

    try {
      const listaRegistros = await cursoServices.consultaTodos(where);
      return res.status(200).json(listaRegistros);
    } catch (error) {
      return res.status(500).json({msg:error.message});
    }
  }
}

module.exports = CursoController;

