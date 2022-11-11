const db =require("../models/connection")
const Flight=db.flights;
const Route=db.routes;

const createFlight = async (data, callback) => {
        const flightCreated = await Flight.create(data);
        if (flightCreated) {
            return callback(null, { message: "Flight Created Successfully" },201);
        }
};

const searchFlight = async (data, callback) => {
    
        const routeData = await Route.findOne({
            where: {
                source: data.source,
                destination: data.destination,
            },
        });

        if (!routeData) {
            return callback({ error: "No Direct Flights" }, null, 404);
        }

        const flightData = await Flight.findAll({
            where: {
                routeId: routeData.dataValues.id,
            },
        });
        if (flightData) {
            return callback(null, { result: flightData }, 200);
        }
   
};

const getAllFlight = async (callback) => {
    try {
        const flightData = await Flight.findAll();
        if (flightData) {
            return callback(null, { result: flightData }, 200);
        }
    } catch (err) {
        return callback({ error: err }, null, 503);
    }
};

module.exports={createFlight,searchFlight,getAllFlight}
