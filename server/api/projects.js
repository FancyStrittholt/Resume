const express = require('express');
const router = express.Router();

const { getAllProjects, getProjectsById } = require('../db/sqlHelperFunctions/projects');

router.get('/', async (req, res, next) => {
  try {
    const projects = await getAllProjects();
    res.send(projects);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const projects = await getProjectsById(req.params.id);
    res.send(projects);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
