import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("courses", function (table) {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.text("description");
        table.float("ratings");
        table.integer('instructor_id').references('id').inTable('instructors').onDelete('CASCADE');
        table.timestamps(true, true);
      })
   
}
  

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("courses")
}

