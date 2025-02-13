import type { RequestHandler } from "express";
import vehicleRepository from "./vehicleRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const vehicles = await vehicleRepository.readAll();
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const vehicleId = Number(req.params.id);
    const vehicle = await vehicleRepository.read(vehicleId);
    if (vehicle == null) {
      res.sendStatus(404);
    } else {
      res.json(vehicle);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newVehicle = {
      famille: req.body.famille,
      catégorie: req.body.catégorie,
      équipement: req.body.équipement,
      quantité: req.body.quantité,
      disponible: req.body.disponible,
    };
    const insertId = await vehicleRepository.create(newVehicle);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const vehicle = {
      id: Number(req.params.id),
      famille: req.body.famille,
      catégorie: req.body.catégorie,
      équipement: req.body.équipement,
      quantité: req.body.quantité,
      disponible: req.body.disponible,
    };

    const affectedRows = await vehicleRepository.update(vehicle);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const vehicleId = Number(req.params.id);
    await vehicleRepository.delete(vehicleId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
