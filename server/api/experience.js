const express = require('express');
const router = express.Router();

const { getAllExperience, getExperienceById } = require('../db/sqlHelperFunctions/experience');

router.get('/', async (req, res, next) => {
  try {
    const experience = await getAllExperience();
    res.send(experience);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const experience = await getExperienceById(req.params.id);
    res.send(experience);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
