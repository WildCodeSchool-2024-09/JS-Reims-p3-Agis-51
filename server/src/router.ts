import express from "express";

const router = express.Router();
import authActions from "./modules/auth/authActions";
import documentActions from "./modules/document/documentActions";
import userActions from "./modules/user/userActions";
import vehicleActions from "./modules/vehicles/vehicleActions";

router.post("/api/users", authActions.hashPassword, userActions.add);
router.post("/api/login", authActions.login);
router.get("/api/vehicles", vehicleActions.browse);
router.get("/api/vehicles/:id", vehicleActions.read);

// Authentication wall
router.use(authActions.verifyToken);
router.get("/api/login", authActions.verifyAuth);
router.post("/api/logout", authActions.logout);

router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.put("/api/users/:id", userActions.edit);
router.post("/api/vehicles", vehicleActions.add);
router.put("/api/vehicles/:id", vehicleActions.edit);
router.delete("/api/vehicles/:id", vehicleActions.destroy);
router.get("/api/documents", documentActions.browse);
router.get("/api/documents/:id", documentActions.read);
router.post("/api/documents", documentActions.add);
router.delete("/api/documents/:id", documentActions.destroy);

export default router;
