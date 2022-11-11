const {register,login,allUsers,singleUser} = require("../services/user.service");

const createUser = (req, res) => {
    register({...req.body}, (err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
}

const checkUser = (req, res) => {
    login(res,{...req.body}, (err, result, status_code) => {

        return res.status(status_code).json(err ? err : result);
    });
}
const getallUsers = (req, res) => {
    allUsers((err, result, status_code) => {

        return res.status(status_code).json(err ? err : result);
    });
}
const getSingleUser = (req, res) => {
    singleUser({...req.params}, (err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
}


module.exports={createUser,checkUser,getSingleUser,getallUsers};