// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = 'mongodb://localhost/drones-app'           // <- OJO, el mismo nombre que vayas a poner en el .env

mongoose
    .connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))

const drones = [
    {
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12,
    },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20,
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18,
    }

];

// The script that will be run to actually seed the database

Drone
    .create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));



