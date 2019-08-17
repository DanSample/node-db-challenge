const express = require('express');
const projectsRouter = require('./routers/projects');
const resourcesRouter = require('./routers/resources');
const tasksRouter = require('./routers/tasks');

const server = express();
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;
