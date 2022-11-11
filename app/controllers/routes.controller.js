const {createRoute,getAllRoute,deleteRoute}=require("../services/routes.service")



const createRoutes=(req,res)=>{
    createRoute(req.body,(err,callBack,resp)=>{
        return res.status(resp).json(err ? err:result);
    })
}


const getAllRoutes = (req, res) => {
    getAllRoute((err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
};

const deleteRoutes = (req, res) => {
    const id = Number.parseInt(req.query.id);
    console.log(typeof id);
    if (!id || typeof id !== "number") {
        return res.status(400).json({ error: "Please enter routeId" });
    } else {
        deleteRoute({ id: id }, (err, result, status_code) => {
            return res.status(status_code).json(err ? err : result);
        });
    }
};

module.exports={createRoutes,getAllRoutes,deleteRoutes}