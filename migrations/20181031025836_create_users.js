exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
