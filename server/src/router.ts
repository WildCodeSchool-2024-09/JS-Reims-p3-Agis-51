import express from "express";

const router = express.Router();

import documentActions from "./modules/document/documentActions";
import vehicleActions from "./modules/vehicles/vehicleActions";

router.get("/api/vehicles", vehicleActions.browse);
router.get("/api/vehicles/:id", vehicleActions.read);
router.post("/api/vehicles", vehicleActions.add);
router.delete("/api/vehicles/:id", vehicleActions.destroy);
router.get("/api/document", documentActions.browse);

export default router;
