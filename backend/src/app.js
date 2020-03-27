const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rota / Recurso
 */

 /**
  * Metodo HTTP:
  * 
  * GET: Buscar uma informacao no back-end
  * POST: Criar uma informacao no back-end
  * PUT:Alterar uma informacao no back-end
  * DELETE: Deletar uma informaçao no back-end
  */
/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviados na rota a pos o '?' 
 * que servem para filtros, paginacao
 * 
 * Route Params: Parametros utilizados para identificar recursos /users/:id
 * 
 * Request Body: Corpo da requisicao utilizado para criar ou alterar recursos
 */

 /**:SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  */

  /**
   * Driver: Select * from Users
   * Query Builder: table('users').select(*).where()  - Knex.js
   */