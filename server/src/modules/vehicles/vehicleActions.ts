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

export default { browse };
