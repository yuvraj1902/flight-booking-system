
const db=require('../models/connection')
const Coupon =db.coupons;
const Booking=db.bookings;


const getAllCoupon = async (callback) => {
    try {
        const coupon = await Coupon.findAll();
        if (coupon) {
            return callback(null, { result: coupon }, 200);
        }
    } catch (error) {
        return callback({ error: err }, null, 503);
    }
};

const createCoupon = async (data, callback) => {
    try {
        const couponCreated = await Coupon.create(data);
        if (couponCreated) {
            return callback(
                null,
                { message: "Coupon created successfully" },
                201
            );
        }
    } catch (error) {
        return callback({ error: error }, null, 503);
    }
};

const applyCoupon = async (data, callback) => {
    
        const bookingData = await Booking.findOne({
            where: {
                id: data.bookingId,
            },
        });

        if (!bookingData) {
            return callback({ error: "Wrong booking id" }, null, 400);
        }

        const couponData = await Coupon.findOne({
            where: {
                id: data.couponId,
            },
        });

        if (!couponData) {
            return callback({ error: "Invalid coupon id" }, null, 400);
        }

        const appliedCoupon = await Booking.update(
            {
                couponId: data.couponId,
            },
            {
                where: {
                    id: data.bookingId,
                },
            }
        );

        if (appliedCoupon) {
            return callback(
                null,
                { message: "Discount Applied Successfully" },
                200
            );
        }

};

module.exports={createCoupon,getAllCoupon,applyCoupon}