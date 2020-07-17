import { Model } from "./models";
import Knex from "knex";

export class User extends Model {
  constructor(database: Knex, table: string) {
    super(database, table);
  }
}
