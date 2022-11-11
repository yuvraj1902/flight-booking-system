const { expressjwt: jwt } = require("express-jwt");
const dotenv=require('dotenv')
dotenv.config();

const isSignedIn = jwt({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    userProperty: "auth"
});

module.exports = isSignedIn