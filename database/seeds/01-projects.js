exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'project A', description: 'A description', completed: false },
    { name: 'project B', description: 'B description', completed: true },
    { name: 'project C', description: 'C description', completed: false },
    { name: 'project D', description: 'D description', completed: true }
  ]);
};
