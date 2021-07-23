
exports.up = function(knex) {
  return knex.schema
  .createTable('test_inputs', table => {
    table.increments('id');
    table.text('type', 255).notNullable();
    table.string('title').notNullable();
    table.string('url').notNullable();
    table.string('description').notNullable();
    table.string('tags').notNullable();
  })

  .createTable('dev', table => {
    table.increments('id');
    table.text('type', 255).notNullable();
  })

  .createTable('icons', table => {
    table.increments('id');
    table.text('tag', 255).notNullable();
    table.string('url', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('test_inputs')
  .dropTableIfExists('dev')
  .dropTableIfExists('icons')

};
