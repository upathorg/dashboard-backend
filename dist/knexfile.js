"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
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
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            tableName: "knex_migrations",
            directory: "./migrations",
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
