const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection established!');
  } catch (error) {
    console.error(error.message);
  }
}

connect()
  .then();

// В каких гонках лошадь принимала участие?
const getHorseRaces = [
  'SELECT races.name FROM horses'
  + ' JOIN entries ON horses.id = horse_id'
  + ' JOIN races ON race_id = races.id'
  + ' WHERE horses.name = ?',
  'Impala',
];
// Какие жокеи участвовали в заезде на этой лошади?
const getJockeysFromHorse = [
  'SELECT jockeys.name FROM jockeys'
  + ' join entries on jockey_id = jockeys.id'
  + ' join races on race_id = races.id'
  + ' join horses on horses.id = horse_id'
  + ' where horses.name = ?',
  'Impala',
];
// В каких гонках участвовал жокей?
const getJockeyRaces = [
  'select races.name from races'
  + ' join entries on races.id = race_id'
  + ' join jockeys on jockey_id = jockeys.id'
  + ' where jockeys.name = ?',
  'Caron Elrick',
];
// На каких лошадях ездил жокей?
const getJockeyHorses = [
  'select horses.name from horses'
  + ' join entries on horse_id = horses.id'
  + ' join jockeys on jockeys.id = jockey_id'
  + ' where jockeys.name = ?',
  'Tammie Lorens',
];
// Какие жокеи принимали участие в гонке?
const getJockeysInRace = [
  'select jockeys.name from jockeys'
  + ' join entries on jockey_id = jockeys.id'
  + ' join races on races.id = race_id'
  + ' where races.name = ?',
  'race1',
];
// Какие лошади принимали участие в гонке?
const getHorsesFromRace = [
  'select horses.name from horses'
  + ' join entries on horse_id = horses.id'
  + ' join races on races.id = race_id'
  + ' where races.name = ?',
  'race1',
];

function getData([query, arg]) {
  return sequelize.query(
    query,
    {
      type: QueryTypes.SELECT,
      replacements: [arg],
    },
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

getData(getJockeyHorses)
  .then(console.log);
