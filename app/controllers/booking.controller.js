const { createBooking, getBookingDetail } = require("../services/booking.service");
const createBookings = (req, res) => {
    createBooking({ ...req.body, userId: req.auth.id }, (err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
};

const getBookingDetails = (req, res) => {
    getBookingDetail({ userId: req.auth.id }, (err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
};

module.exports={createBookings,getBookingDetails}