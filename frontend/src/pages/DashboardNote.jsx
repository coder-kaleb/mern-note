import { useState } from "react";
import Modal from "../components/Modal";
import Note from "../components/Note";
const DashboardNote = () => {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    tags: [],
  });
  console.log(note);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    try {
      setLoading(true);
      const res = await fetch(`${apiBaseUrl}/api/note/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      const resnote = await res.json();
      console.log(resnote);
      if (!res.ok) {
        throw new Error("unable to create the note");
      }
      setNote({ title: "", content: "", tags: [] });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
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
      <Modal
        note={note}
        loading={loading}
        setNote={setNote}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default DashboardNote;
