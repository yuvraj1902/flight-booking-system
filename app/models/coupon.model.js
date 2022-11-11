const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Coupon = sequelize.define("coupons",{
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            status : { 
                type : DataTypes.ENUM('inactive','active'), 
                allowNull : false, 
            },
            discountPercentage: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue:0
            },
        },
        {
            tableName: false,
            timestamps: false,
        }
    );
    return Coupon;
};