class Controller {
  constructor(service){
    this.service = service;
  }

  async consultaTodos(req, res) {
    try {
      //
      const listaRegistros = await this.service.consultaTodos();
      return res.status(200).json(listaRegistros);
    } catch(error) {
      //
      return res.status(500).json(error);
    }
    
  }

  async consultaPorId(req, res) {
    const { id } = req.params;
    try {
      const registro = await this.service.consultaPorId(Number(id));
      return res.status(200).json(registro);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async crearRegistro(req, res) {
    const datosRegistro = req.body;
    try {
      const nuevoRegistro = await this.service.crearRegistro(datosRegistro);
      return res.status(200).json(nuevoRegistro);
    } catch (error) {
      return res.status(500).json(error);
    }
  } 

  async actualizarRegistro(req, res) {
    const datosRegistroActualizado = req.body;
    const { id } = req.params;

    try {
      const isUpdate = await this.service.actualizarRegistro(datosRegistroActualizado, id);

      if (isUpdate) {
        return res.status(200).json({mensaje: `Id ${id} actualizado correctamente`});
      } else {
        return res.status(400).json({mensaje: 'Registro no encontrado'});
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async borrarRegistro(req, res) {
    const { id } = req.params;
    try {
      await this.service.borrarRegistro(Number(id));
      return res.status(200).json({ mensaje: `id ${id} borrado` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = Controller;