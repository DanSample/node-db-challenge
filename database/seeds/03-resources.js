exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'resource 1', description: '1 description' },
    { name: 'resource 2', description: '2 description' },
    { name: 'resource 3', description: '3 description' },
    { name: 'resource 4', description: '4 description' }
  ]);
};
