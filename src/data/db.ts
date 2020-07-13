require('dotenv').config();
import knex from 'knex'
const knexfile = require('../knexfile');

const env = process.env.NODE_ENV || 'development'
const configs = knexfile[env]
const database: knex = knex(configs)

export default database;