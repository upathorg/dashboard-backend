import Knex from "knex";
import {
  StudentCreateInterface,
  StudentUpdateInterface,
  CourseCreateInterface,
  CourseUpdateInterface,
  EnrollCourseInterface,
} from "../interfaces/modelInterfaces";

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

  find(conditions: {}) {
    return this.database(this.table).where(conditions).select();
  }

  findByOne(conditions: any) {
    return this.database(this.table).where(conditions).first();
  }

  findById(id: number) {
    return this.database(this.table).where({ id }).select().first();
  }

  insertStudent(values: StudentCreateInterface) {
    return this.database(this.table).insert(values);
  }

  updateStudent(id: number, values: StudentUpdateInterface) {
    return this.database(this.table).where({ id }).update(values);
  }

  deleteStudent(id: number){
    return this.database(this.table).where({id}).del()
  }

  insertCourse(values: CourseCreateInterface) {
    return this.database(this.table).insert(values);
  }

  updateCourse(id: number, values: CourseUpdateInterface) {
    return this.database(this.table).where({ id }).update(values);
  }

  deleteCourse(id: number){
    return this.database(this.table).where({id}).del()
  }

  enrollCourse(values: EnrollCourseInterface) {
    return this.database(this.table).insert(values);
  }


}
