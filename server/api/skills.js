const express = require('express');
const router = express.Router();

const { getAllSkills, getSkillsById } = require('../db/sqlHelperFunctions/skills');

router.get('/', async (req, res, next) => {
  try {
    const skills = await getAllSkills();
    res.send(skills);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const skills = await getSkillsById(req.params.id);
    res.send(skills);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
