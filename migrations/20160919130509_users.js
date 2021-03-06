exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.text('username');
    table.text('password');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
};
