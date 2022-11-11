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
db.routes=require("./routes.model")(sequelize,Sequelize)
db.flights=require("./flight.model")(sequelize,Sequelize)
db.coupons=require("./coupon.model")(sequelize,Sequelize)
db.bookings=require('./booking.model')(sequelize,Sequelize)

db.routes.hasOne(db.flights, {
    foreignKey: {
        allowNull: false,
    },
});

db.flights.belongsTo(db.routes);


db.coupons.hasOne(db.bookings);
db.bookings.belongsTo(db.coupons);

db.users.hasOne(db.bookings, {
    foreignKey: {
        allowNull: false,
    },
})
db.bookings.belongsTo(db.users);

db.flights.hasOne(db.bookings, {
    foreignKey: {
        allowNull: false,
    },
})
db.bookings.belongsTo(db.flights);


sequelize.sync({alter:true});

 module.exports=db;