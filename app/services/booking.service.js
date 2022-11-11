const db=require('../models/connection')

const Booking = db.bookings
const Flight = db.flights;

const createBooking = async (data, callback) => {
    try {
        const flightData = await Flight.findOne({
            where: {
                id: data.flightId,
            },
        });
        if (!flightData) {
            return callback({ error: "Invalid flightId" }, null, 404);
        }
        const capacity = flightData.dataValues.capacity;
        if (data.noOfSeats > capacity) {
            return callback(
                null,{ message: `${capacity} seats available` },400);
        }

        data.totalAmount = data.noOfSeats * flightData.dataValues.ticketPrice;

        const bookingData = {
            seatsBooked: data.noOfSeats,
            totalAmount: data.totalAmount,
            userId: data.userId,
            flightId:data.flightId
        };

        console.log(bookingData);

        const bookingCreated = await Booking.create(bookingData);
        if (bookingCreated) {
            return callback(null,{ message: "Booking confrim proceed to payment" }, 201);
        }
    } catch (err) {
        return callback({ error: err }, null, 503);
    }
};

const getBookingDetail = async (data, callback) => {
        const bookingDetails = await Booking.findAll();
        if (bookingDetails) {
            return callback(null, { result: bookingDetails }, 200);
        } else {
            return callback({ error: "No bookings done yet" }, null, 400);
        }
} 

module.exports={createBooking,getBookingDetail}
