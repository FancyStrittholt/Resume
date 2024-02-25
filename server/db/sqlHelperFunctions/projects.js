const client = require('../client');
const util = require('util');

async function getAllProjects() {
  try {
    const { rows: projects } = await client.query('SELECT * FROM projects ORDER BY name');
    return projects;
  } catch (error) {
    throw new Error('Unable to retrieve projects');
  }
}

async function getProjectsById(id) {
  try {
    const {
      rows: [project],
    } = await client.query(
      `
            SELECT * FROM projects
            WHERE id = $1;
        `,
      [id]
    );
    return project;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllProjects,
  getProjectsById
};
