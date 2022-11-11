
const db=require('../models/connection')
const Coupon =db.coupons;


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

module.exports={createCoupon,getAllCoupon}