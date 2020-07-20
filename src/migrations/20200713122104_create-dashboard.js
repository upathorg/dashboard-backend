
exports.up = function(knex) {
    return knex.schema.createTable('dashboard', (table) => {
        table.increments();
        table.text('firstName');
        table.text('lastName');
        table.text('username');
        table.text('email');
        table.text('password');
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dashboard');
};
