const MatriculaServices = require('../services/MatriculaServices.js');
const Controller = require('./Controller.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor(){
    super(matriculaServices);
  }
}

module.exports = MatriculaController;