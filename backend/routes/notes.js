import e from "express";
import {
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../controllers/noteController.js";

const router = e.Router();
// get all notes
router.get("/", getNote);

// CREATE notes
router.post("/", createNote);

// UPDATE note
router.put("/:id", updateNote);

// create
router.delete("/:id", deleteNote);

export default router;
