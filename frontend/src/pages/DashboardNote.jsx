import { useState } from "react";
import Modal from "../components/Modal";
import Note from "../components/Note";
const DashboardNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    tags: [],
  });
  console.log(note);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = fetch("http://localhost:5000/api/note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      if (res.ok) {
        setNote({ title: "", content: "", tags: [] });
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <section className="relative h-screen w-full p-5">
      <div className="w-f flex flex-wrap gap-4">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
      <Modal note={note} setNote={setNote} handleSubmit={handleSubmit} />
    </section>
  );
};

export default DashboardNote;
