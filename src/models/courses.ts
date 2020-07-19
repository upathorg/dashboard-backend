import { Model } from "./models";
import Knex from "knex";

export class Course extends Model {
    constructor(database: Knex, table: string){
        super(database, table)
    }
}