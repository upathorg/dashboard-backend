import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("instructors", (table) => {
        table.increments().primary();
        table.text("firstName");
        table.text("lastName");
        table.text("username").notNullable();
        table.text("email").notNullable();
        table.timestamps(true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('instructors');
}

