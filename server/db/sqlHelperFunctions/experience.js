const client = require('../client');
const util = require('util');

async function getAllExperience() {
  try {
    const { rows: experience } = await client.query('SELECT * FROM experience ORDER BY name');
    return games;
  } catch (error) {
    throw new Error('Unable to retrieve experience');
  }
}

async function getExperienceById(id) {
  try {
    const {
      rows: [experience],
    } = await client.query(
      `
            SELECT * FROM experience
            WHERE id = $1;
        `,
      [id]
    );
    return experience;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllExperience,
  getExperienceById,
};
