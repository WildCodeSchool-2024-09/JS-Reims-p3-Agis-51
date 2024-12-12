import type { RequestHandler } from "express";

// Import access to data
import vehicleRepository from "./vehicleRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all vehicles
    const vehicles = await vehicleRepository.readAll();

    // Respond with the vehicles in JSON format
    res.json(vehicles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const vehicleId = Number(req.params.id);
    const vehicle = await vehicleRepository.read(vehicleId);

    // If the vehicle is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (vehicle == null) {
      res.sendStatus(404);
    } else {
      res.json(vehicle);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the vehicle data from the request body
    const newVehicle = {
      type: req.body.type,
      available: req.body.available,
    };

    // Create the vehicle

    const insertId = await vehicleRepository.create(newVehicle);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json(insertId);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
