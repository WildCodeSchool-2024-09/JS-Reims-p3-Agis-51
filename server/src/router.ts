import express from "express";

const router = express.Router();

import documentActions from "./modules/document/documentActions";
import vehicleActions from "./modules/vehicles/vehicleActions";

router.get("/api/vehicles", vehicleActions.browse);
router.get("/api/vehicles/:id", vehicleActions.read);
router.post("/api/vehicles", vehicleActions.add);
router.put("/api/vehicles/:id", vehicleActions.edit);
router.delete("/api/vehicles/:id", vehicleActions.destroy);
router.get("/api/documents", documentActions.browse);
router.get("/api/documents/:id", documentActions.read);
router.post("/api/documents", documentActions.add);
router.delete("/api/documents/:id", documentActions.destroy);

export default router;
