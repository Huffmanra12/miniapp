/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies_table').del()
  await knex('movies_table').insert([
    {title: 'Mean Girls', add_method_id: 1},
    {title: 'Hackers', add_method_id: 1},
    {title: 'The Grey', add_method_id: 1},
    {title: 'Sunshine', add_method_id: 1},
    {title: 'Ex Machina', add_method_id: 1},
  ]);
};
