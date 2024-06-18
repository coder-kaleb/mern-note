import { VscPinned } from "react-icons/vsc";
import { GoTrash } from "react-icons/go";
import { GiPencil } from "react-icons/gi";
const Note = ({
  title,
  content,
  tags,
  id,
  setIsOpen,
  setNote,
  setIsUpdate,
  setFetchAllNote,
}) => {
  // update the note
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const getSingleNote = async (e) => {
    console.log("handle update called");
    const res = await fetch(`${apiBaseUrl}/api/note/${id}`);
    const note = await res.json();
    setIsUpdate(true);
    console.log(note);
    setNote(note);
  };

  const handleDelete = async () => {
    await fetch(`${apiBaseUrl}/api/note/${id}`, {
      method: "DELETE",
    });
    setFetchAllNote(true);
  };

  return (
    <div className="relative flex w-full min-w-80 max-w-[470px] flex-1 flex-col rounded-md border border-slate-300 px-2 py-2 shadow-transparent transition duration-300 hover:shadow-lg">
      <VscPinned className="absolute right-2 top-3 size-5 scale-100 cursor-pointer text-violet-600 transition-all hover:scale-125" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="mb-3 text-sm font-semibold text-gray-400">
        2 days ago
      </span>
      <p className="mb-2 text-[15px]">{content}</p>
      <p className="font-light text-gray-500">
        {tags?.map((tag) => `#${tag}, `)}
      </p>
      <div className="absolute bottom-4 right-2 flex gap-5">
        <GiPencil
          className="scale-100 cursor-pointer transition-all hover:scale-125"
          onClick={() => {
            setIsOpen(true);
            getSingleNote();
          }}
        />
        <GoTrash
          className="scale-100 cursor-pointer transition-all hover:scale-125"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Note;
