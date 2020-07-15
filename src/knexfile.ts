import * as dotenv from 'dotenv';

dotenv.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

module.exports = {
  
  development: {
    client: "pg",
    connection: process.env.DATABASE,
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },

    seeds: {
      directory: "./data/seeds",
    },
  

  staging: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },

    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },

    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },

    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },

    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
