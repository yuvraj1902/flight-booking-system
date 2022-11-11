const {createCoupon,getAllCoupon,applyCoupon} = require("../services/coupon.service");
const createCoupons = (req, res) => {
    createCoupon({ ...req.body }, (err, result, status_code) => {
        if (err) {
            return res.status(status_code).json(err);
        }
        return res.status(status_code).json(result);
    });
};

const getAllCoupons = (req, res) => {
    getAllCoupon((err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
};

const applyCoupons = (req, res) => {

    applyCoupon({
            id: req.auth.id,
            bookingId: req.body.bookingId,
            couponId: req.body.couponId,
        },(err, result, status_code) => {
            return res.status(status_code).json(err ? err : result);
        }
    );
};

module.exports={createCoupons,getAllCoupons,applyCoupons}