const Sequelize=require('sequelize')
const dotenv=require('dotenv')
dotenv.config()


const sequelize = new Sequelize(process.env.DATABASE,process.env.USERNAME, process.env.PASSWORD,{
    host: 'localhost',
    dialect:'mysql' 
  })

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.users=require("./user.model")(sequelize,Sequelize)


  module.exports=db;