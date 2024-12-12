import type { RequestHandler } from "express";
import documentRepository from "./documentRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const document = await documentRepository.readAll();

    // Respond with the items in JSON format
    res.json(document);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse };
