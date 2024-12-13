import express from "express";

const router = express.Router();

import vehicleActions from "./modules/vehicles/vehicleActions";
router.get("/api/vehicles", vehicleActions.browse);
router.get("/api/vehicles/:id", vehicleActions.read);
router.post("/api/vehicles", vehicleActions.add);

export default router;
