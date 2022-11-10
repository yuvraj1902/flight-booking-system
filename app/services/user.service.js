
const hashPassword=require("../helper/hashPassword");
const db=require("../models/connection")
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv")
dotenv.config()
const User=db.users;

const register = async (data, callback) => {
    try {
      let fetchEmail = await User.count({
        where: {
          email: data.email,
        },
      });
      if (fetchEmail) {
        return callback({ message: "user already exist" }, null, 409);
      }
      data.password = await hashPassword.createHash(data.password);
      await User.create(data);
      return callback({ message: "user created successfully" }, null, 201);
    } catch (error) {
        console.log(error);
      return callback({ error: error }, null, 500);
    }
};


const login=async(res,data,callback)=>{
    try {
        let fetchEmail = await User.count({
          where: {
            email: data.email,
          },
        });
        if (!fetchEmail) {
          return callback({ message: "Email is not registered yet " }, null, 409);
        }

        let userData=await User.findOne({
            where:{
                email:data.email,
            },
        }) 
        ispasswordMatch = await hashPassword.compareHash(data.password,userData.password);
        if(!ispasswordMatch){
            return callback({message:"password is not correct"},null,400);
        }
       
        const token=jwt.sign(data,process.env.SECRET);
        res.cookie("token",token,{expires:new Date(new Date().getTime()+360*60*1000),httpOnly:true});
        return callback({ message: "Login successfully" ,token:token}, null, 201);
      } catch (error) {
          console.log(error);
        return callback({ error: error }, null, 500);
      }
}

const allUsers = async (callback) => {
    try {
      let userData = await User.findAll({
        attributes: { exclude: ["password"] },
      });
      return callback(null,{ data: userData }, 200);
    } catch (error) {
      return callback({ error: error },null, 500);
    }
};

const singleUser = async (data, callback) => {
    try {
      let userData = await User.findOne({
        attributes: { exclude: ["password"] },
        where: {
          id: data.id,
        },
      });
      return callback(null,{ data: userData }, 200);
    } catch (error) {
      return callback({ error: error },null, 500);
    }
};
  
module.exports={register,login,allUsers,singleUser};