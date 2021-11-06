const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection established!');
  } catch (error) {
    console.error(error.message);
  }
}

connect();

const getAll = () => {
  return sequelize.query(
    'SELECT * FROM employee',
    { type: QueryTypes.SELECT },

  );
}

const query = '';

function getHorses (name){
  return sequelize.query(
    'SELECT * FROM horses',
    { type: QueryTypes.SELECT }, // to return value without meta

  );
}

// patten for replacement
// await sequelize.query(
//   'SELECT * FROM projects WHERE status = ? AND lang = ?;',
//   {
//     replacements: ['active', 'js'],
//     type: QueryTypes.SELECT
//   }
//  );

//  await sequelize.query(
//   'SELECT * FROM projects WHERE status = :status AND lang = :lang;',
//   {
//     replacements: { status: 'active', lang: 'js' },
//     type: QueryTypes.SELECT
//   }
//  );

getHorses().then(console.log);
