const admin = {
    email: "yuvi@gmail.com",
    password: "yuvi"
}

const isAdmin = (req, res, next) => {
    console.log(req.auth);
    if (req.auth.email == admin.email ) {
        next();
    } else {
        return res.status(403).json({
            error: "Not an Admin"
        })
    }
}
module.exports = isAdmin