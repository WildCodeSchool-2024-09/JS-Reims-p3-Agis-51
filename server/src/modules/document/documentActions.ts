import type { RequestHandler } from "express";
import documentRepository from "./documentRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const documents = await documentRepository.readAll();
    // Respond with the items in JSON format
    res.json(documents);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newDocument = {
      idCard: req.body.idCard,
      driverLicense: req.body.driverLicense,
    };
    const documentId = await documentRepository.create(newDocument);
    res.status(201).json(documentId);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const documentId = Number(req.params.id);
    const document = await documentRepository.read(documentId);
    if (document == null) {
      res.sendStatus(404);
    } else {
      res.json(document);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const documentId = Number(req.params.id);
    await documentRepository.delete(documentId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, destroy, add, read };
