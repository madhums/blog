const Knex = require('knex');
const config = require('./');
const knexConfig = require('../knexfile');
const db = Knex(knexConfig[config.env]);

module.exports = db;
