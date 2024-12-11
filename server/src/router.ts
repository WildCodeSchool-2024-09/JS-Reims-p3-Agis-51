import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import vehicleActions from "./modules/vehicles/vehicleActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/vehicles", vehicleActions.browse);
router.get("/api/vehicles/:id", vehicleActions.read);
/* ************************************************************************* */

export default router;
