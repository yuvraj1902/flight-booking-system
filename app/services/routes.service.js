const Route=require('../models/routes.model')

const createRoute=async(data,callback)=>{

    const routeData=await Route.findOne({
            where:{
                source:data.source,
                destination:data.destination,
                }
    }) 
    if(routeData){
        return callback({error:"Route already exists"},null,409)
    }
    
    const routeCreated=await Route.create(data);
    if(routeCreated){
        return callback(null,{message:"Route created successfully"},201);
    }

}

const getAllRoute = async (callback) => {
        const routeData = await Route.findAll();
        if (routeData) {
            return callback(null, { result: routeData }, 200);
        }
};

const deleteRoute = async (data, callback) => {
       const routeDeleted = await Route.destroy({
            where: {
                id: data.id,
            },
        });
        if (routeDeleted) {
            return callback(null,{ message: "Routed Deleted Successfully" },200);
        }
};

module.exports={createRoute,getAllRoute,deleteRoute};