import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return (
    knex.schema
      .createTable("students", (table) => {
        table.increments().primary();
        table.text("firstName");
        table.text("lastName");
        table.text("username").notNullable();
        table.text("email").notNullable();
        table.text("password");
      })
   
    
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("students")
    // .dropTable("courses")
    // .dropTable("students_courses");
}
