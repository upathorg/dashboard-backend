import { Model } from "./models";
import Knex from "knex";

export class Student extends Model {
  constructor(database: Knex, table: string) {
    super(database, table);
  }
}
