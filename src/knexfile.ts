import * as dotenv from 'dotenv';

dotenv.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

module.exports = {
  
  development: {
    client: "pg",
    connection: // "postgres://tjjxvluqxtqzbk:c2b11fdadd7c7ad65417ffe9972c6ed87fe75b83bc85d893501a84bb6331bb63@ec2-52-200-48-116.compute-1.amazonaws.com:5432/d3eet7vftpl1in?ssl=true",
    {
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'upath_db',
    },
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
      directory: "./database/migrations",
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
