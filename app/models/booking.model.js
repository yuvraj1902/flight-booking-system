const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const bookings = sequelize.define("bookings",{
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            bookingStatus: {
                type: DataTypes.ENUM("confirm", "booked"),
                defaultValue: "confirm",
                allowNull: false,
            },
            bookingTime: {
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
            totalAmount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            seatsBooked: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: false,
        }
    );
    return bookings;
};