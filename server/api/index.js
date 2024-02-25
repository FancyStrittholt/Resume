const express = require('express');
const router = express.Router();

router.get('/health', (req, res, next) => {
  res.send('OK');
});

router.use('/user', require('./user'));
router.use('/auth', require('./auth'));
router.use('/experience', require('./experience'));
router.use('/skills', require('./skills'));
router.use('/projects', require('./projects'));
module.exports = router;
