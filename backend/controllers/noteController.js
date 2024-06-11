import Note from "../models/noteModel.js";

// get all notes
const getNote = async (req, res) => {
  res.json("you get all message");
};

// CREATE NOTE
const createNote = async (req, res) => {
  const { title, content, tags } = req.body;
  const note = await Note.create({ title, content, tags });
  console.log(note);
  res.status(201).json(note);
};

// UPDATE NOTE
const updateNote = async (req, res) => {
  const { id } = req.params;

  res.json({ msg: `note delted with id: ${id}` });
};

// DELETE NOTE
const deleteNote = async (req, res) => {
  const { id } = req.params;

  res.send(`note delted with id: ${id}`);
};

export { createNote, deleteNote, getNote, updateNote };
