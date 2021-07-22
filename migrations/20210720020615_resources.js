
exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.increments('id');
    table.text('type', 255).notNullable().defaultTo('resource')
    table.string('title', 255).notNullable();
    table.string('url').notNullable();
    table.text('description').notNullable();
    table.string('tags').notNullable();
    table.timestamp('created').defaultTo(knex.fn.now())
    table.timestamp('updated').defaultTo(knex.fn.now())
  })
  .createTable('templates', table => {
    table.increments('id');
    table.text('type', 255).notNullable().defaultTo('template')
    table.string('title', 255).notNullable();
    table.text('content').notNullable();
    table.text('tags').notNullable();
    table.timestamp('created').defaultTo(knex.fn.now())
    table.timestamp('updated').defaultTo(knex.fn.now())
  })
  .createTable('reading_list', table => {
    table.increments('id');
    table.text('type', 255).notNullable().defaultTo('research')
    table.string('title', 255).notNullable();
    table.string('url').notNullable();
    table.text('description').notNullable();
    table.text('tags').notNullable();
    table.enu('status', ['new', 'in-progress', 'working-on', 'logged', 'done']).defaultTo('new')
    table.timestamp('created').defaultTo(knex.fn.now())
    table.timestamp('updated').defaultTo(knex.fn.now())
  })

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
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('resources')
  .dropTableIfExists('templates')
  .dropTableIfExists('reading_list')
  .dropTableIfExists('test_inputs')
  .dropTableIfExists('dev')
};
