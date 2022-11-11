const {createFlight,searchFlight,getAllFlight,} = require("../services/flight.service");
const createFlights = (req, res) => {
    createFlight({ ...req.body }, (err, result, status_code) => {
        if (err) {
            return res.status(status_code).json(err);
        }
        return res.status(status_code).json(result);
    });
};


const searchFlights = (req, res) => {
    searchFlight({...req.body}, (err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
};

const getAllFlights = (req, res) => {
    getAllFlight((err, result, status_code) => {
        return res.status(status_code).json(err ? err : result);
    });
};

module.exports={createFlights,getAllFlights,searchFlights}