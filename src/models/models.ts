import Knex from "knex";
import { UserQueryInterface } from "../interfaces/modelInterfaces";

export class Model {
  database: Knex;
  table: string;

  constructor(database: Knex, table: string) {
    this.database = database;
    this.table = table;
  }

  all() {
    return this.database(this.table).select();
  }

  find(conditions: any) {
    return this.database(this.table).where(conditions).select();
  }

  findByOne(conditions: any){
      return this.database(this.table).where(conditions).first();
  }

  findById(id: number){
      return this.database(this.table).where({id}).select().first();
  }

  insertUser(values: UserQueryInterface[]){
      return this.database(this.table).insert(values);
  }
}
