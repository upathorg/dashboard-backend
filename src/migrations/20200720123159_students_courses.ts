import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    // // A student can enroll many courses
    // A course can have many students (Many to Many relationship)
    return knex.schema.createTable("students_courses", function (table) {
      table.increments("id").primary();
      table.integer("student_id").references("id").inTable("students").onDelete('CASCADE');
      table.integer("course_id").references("id").inTable("courses").onDelete('CASCADE');
      table.boolean('isCompleted').notNullable().defaultTo(false);
      table.timestamps(true, true);
    })
      
   
}
  

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("students_courses")
}

