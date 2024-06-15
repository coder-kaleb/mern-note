import e from "express";
import {
  createNote,
  deleteNote,
  getNote,
  getSingleNote,
  updateNote,
} from "../controllers/noteController.js";

const router = e.Router();
// get all notes
router.get("/", getNote);

// get single note
router.get("/:id", getSingleNote);

// CREATE notes
router.post("/", createNote);

// UPDATE note
router.put("/:id", updateNote);

// create
router.delete("/:id", deleteNote);

export default router;
