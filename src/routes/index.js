const express = require('express');
const personas = require('./PersonasRouter.js');
const categorias = require('./CategoriasRouter.js');
const cursos = require('./CursosRouter.js');

module.exports = app => {
  app.use(
    express.json(),
    personas,
    categorias,
    cursos,
  );
};