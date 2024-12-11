import type { RequestHandler } from "express";

// Import access to data
import vehicleRepository from "./vehicleRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const vehicles = await vehicleRepository.readAll();

    // Respond with the items in JSON format
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

    // If the item is not found, respond with HTTP 404 (Not Found)
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
export default { browse, read };
