import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  label: String,
});

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [tagSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Note = model("note", noteSchema);
export default Note;
