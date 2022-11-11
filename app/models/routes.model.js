module.exports=(sequelize,Sequelize)=>{
    const Route = sequelize.define("routes", {
        id: {
          type         : Sequelize.INTEGER,
          primaryKey   : true,
          autoIncrement: true
        },
        source: {
          type      : Sequelize.STRING,
          allowNull : false
        },
        destination: {
          type      : Sequelize.STRING,
          allowNull : false,
        },
        distance: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
      },{
        tableName: false,
        timestamps: false
      });
      return Route;
}