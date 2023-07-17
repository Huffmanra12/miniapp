/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE add_method_table CASCADE')

  await knex('add_method_table').del()
  await knex('add_method_table').insert([
    {add_method: 'Hard Coded'},
    {add_method: 'User Added'}

  ]);
};
