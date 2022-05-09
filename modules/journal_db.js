const knex = require('knex');
const dotenv =require('dotenv');
//const DB = require('pg');
dotenv.config();


const DB = knex({
  client:'pg',
  connection: {
    host:  'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


const getAllJournal = (blog) =>{
  return DB('journal')
  .select('title', 'text_content','time_stamp')
}

const addToDataBase = (journal) =>{
  return DB(journal)
  .insert(blog)
  .returning('*')

}
module.expotrs = {
  getAllJournal,
  addToDataBase
}
