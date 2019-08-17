const router = require('express').Router();
const db = require('../../database/config');

router.get('/', async (req, res) => {
  try {
    const projects = (await db('projects')).map(project => {
      return {
        ...project,
        completed: project.completed === 0 ? false : true
      };
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      error: 'Error occurred while attempting to get the projects'
    });
  }
});

router.post('/', async (req, res) => {
  const { name, description, completed } = req.body;

  if (!name) {
    return res.status(400).json({
      error: 'Project property `name` is required!'
    });
  }

  try {
    const [id] = await db('projects').insert({ name, description, completed });
    const [project] = await db('projects').where({ id });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      error: 'Error occurred while attempting to add the project'
    });
  }
});

module.exports = router;
