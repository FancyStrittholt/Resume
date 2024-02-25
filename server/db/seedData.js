const client = require('./client');

async function dropTables() {
  try {
    console.log('Dropping All Tables...');
    await client.query(`
      DROP TABLE IF EXISTS experience CASCADE;
      DROP TABLE IF EXISTS skills CASCADE;
      DROP TABLE IF EXISTS projects CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
    `);
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    console.log('Building All Tables...');
    await client.query(`
      CREATE TABLE experience (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL
        );
        CREATE TABLE skills (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(255) NOT NULL,
            link VARCHAR(255) NOT NULL
            );
     CREATE TABLE projects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL
        );  
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email TEXT NOT NULL,
        token VARCHAR(255) NOT NULL
        );
      `);
  } catch (error) {
    throw error;
  }
}

async function createInitialData() {
  try {
    console.log('Creating Initial Data...');
    await client.query(`
    INSERT INTO experience (name, description, image, link)
    VALUES
   ('Full Stack Academy', 'description', 'fsa.png', 'link')
        `);
    await client.query(`
        INSERT INTO skills (name, description, image, link)
        VALUES
        ('HTML', 'Short description', 'HTML.png', 'link'),
        ('CSS', 'Short description', 'CSS.png', 'link'),
        ('JavaScript', 'Short description', 'JS.png', 'link')
        `);
    await client.query(`
        INSERT INTO projects (name, description, image, link)
        VALUES
        ('Capstone', 'Application that includes a game', 'cad.png', 'link')
        `);
  } catch (error) {
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialData();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rebuildDB,
};
