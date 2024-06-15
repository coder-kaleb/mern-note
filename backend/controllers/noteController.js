import Note from "../models/noteModel.js";

// get all notes
const getNote = async (_req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ msg: "Unabel to get all Notes" });
  }
};

// get single note
const getSingleNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ msg: "Unabel to get all Note" });
  }
};

// CREATE NOTE
const createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const note = await Note.create({ title, content, tags });

    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server ERRor" });
  }
};

// UPDATE NOTE
const updateNote = async (req, res) => {
  const { id } = req.params;
  try {
    const { title, content, tags } = req.body;

    const updatedNote = await Note.updateOne(
      { _id: id },
      { title, content, tags }
    );
    res.json(updatedNote).status(200);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE NOTE
const deleteNote = async (req, res) => {
  const { id } = req.params;

  res.send(`note delted with id: ${id}`);
};

export { createNote, deleteNote, getNote, updateNote, getSingleNote };
