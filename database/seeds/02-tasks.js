exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'task 1 description',
      notes: 'noted',
      completed: false,
      project_id: 1
    },
    {
      description: 'task 2 description',
      notes: 'noted',
      completed: true,
      project_id: 1
    },
    {
      description: 'task 3 description',
      notes: 'noted',
      completed: false,
      project_id: 2
    },
    {
      description: 'task 4 description',
      notes: 'noted',
      completed: true,
      project_id: 2
    }
  ]);
};
