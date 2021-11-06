import express from "express";
import libro from "../controllers/libros.js";

const router = express.Router();

router.post("/registerLibros", libro.registerLibro);

export default router;