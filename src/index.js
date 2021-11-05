const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Конекшен эстеблишд');
  } catch (error) {
    console.error(error.message);
  }
}

connect();

const getAll = () => {
  return sequelize.query("SELECT * FROM employee;");
}

const query = ''

function getHorses (name){
  return sequelize.query("SELECT * FROM horses",
  { type: QueryTypes.SELECT },
  );
}

getHorses().then((d) => console.log(d[0]));
