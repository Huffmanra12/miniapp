/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('movies_table', table => {
    table.integer('add_method_id')
    table.foreign('add_method_id').references('add_method_table.id')
    .deferrable('deferred')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('movies_table', table => {
    table.dropForeign('add_method_id')
    table.dropColumn('add_method_id')
  })
};
