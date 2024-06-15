import { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import Note from "../components/Note";
import CreateNote from "../components/CreateNote";
const DashboardNote = () => {
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    tags: [],
  });

  // the dialoag
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${apiBaseUrl}/api/note/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
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
  useEffect(() => {
    const getAllNotes = async () => {
      const res = await fetch(`${apiBaseUrl}/api/note/`);
      const notes = await res.json();
      setData(notes);
    };
    getAllNotes();
  }, [apiBaseUrl, note]);

  return (
    <section className="relative w-full p-5">
      <div className="w-f flex flex-wrap gap-4">
        {data.length > 0 ? (
          data?.map((note) => (
            <Note
              key={note._id}
              id={note._id}
              title={note.title}
              content={note.content}
              tags={note.tags}
              setIsOpen={setIsOpen}
              setNote={setNote}
              setIsUpdate={setIsUpdate}
            />
          ))
        ) : (
          <CreateNote />
        )}
      </div>
      <Modal
        note={note}
        loading={loading}
        setNote={setNote}
        handleSubmit={handleSubmit}
        setIsOpen={setIsOpen}
        dialogRef={dialogRef}
        setIsUpdate={setIsUpdate}
        isUpdate={isUpdate}
      />
    </section>
  );
};

export default DashboardNote;
