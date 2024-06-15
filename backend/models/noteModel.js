import { Schema, model } from "mongoose";

// const tagSchema = new Schema({
//   label: String,
// });

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
      type: [String],
    },
  },
  { timestamps: true }
);

const Note = model("note", noteSchema);
export default Note;
