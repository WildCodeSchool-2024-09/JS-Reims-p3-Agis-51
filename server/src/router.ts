import express from "express";

const router = express.Router();
import authActions from "./modules/auth/authActions";
import documentActions from "./modules/document/documentActions";
import userActions from "./modules/user/userActions";
import vehicleActions from "./modules/vehicles/vehicleActions";

router.post("/api/login", authActions.login);
router.post("/api/users", authActions.hashPassword, userActions.add);

// Authentication wall
router.use(authActions.verifyToken);

router.get("/api/website_users", userActions.browse);
router.get("/api/website_users/:id", userActions.read);
router.get("/api/vehicles", vehicleActions.browse);
router.get("/api/vehicles/:id", vehicleActions.read);
router.post("/api/vehicles", vehicleActions.add);
router.put("/api/vehicles/:id", vehicleActions.edit);
router.delete("/api/vehicles/:id", vehicleActions.destroy);
router.get("/api/document", documentActions.browse);

export default router;
