const client = require('../client');
const util = require('util');

async function getAllSkills() {
  try {
    const { rows: skills } = await client.query('SELECT * FROM skills ORDER BY name');
    return skills;
  } catch (error) {
    throw new Error('Unable to retrieve experience');
  }
}

async function getSkillsById(id) {
  try {
    const {
      rows: [skill],
    } = await client.query(
      `
            SELECT * FROM skills
            WHERE id = $1;
        `,
      [id]
    );
    return skill;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllSkills,
  getSkillsById,
};
