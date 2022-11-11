module.exports=(sequelize,Sequelize)=>{
    const Flight = sequelize.define("flights", {
        id: {
          type         : Sequelize.INTEGER,
          primaryKey   : true,
          autoIncrement: true
        },
        airLineName: {
          type      : Sequelize.STRING,
          allowNull : false
        },
        capacity: {
          type      : Sequelize.INTEGER,
          allowNull : false,
        },
        ticketPrice: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        startTime: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        endTime: {
            type: Sequelize.TIME,
            allowNull: false,
        }, 
        flightStatus: {
            type : Sequelize.ENUM('active', 'inactive'),
            defaultValue: "active",
        },
      },{
        tableName: false,
        timestamps: false
      });
      return Flight;
}