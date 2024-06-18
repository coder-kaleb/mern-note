/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const Modal = ({
  note,
  setNote,
  loading,
  handleSubmit,
  setIsOpen,
  dialogRef,
  isUpdate,
  setIsUpdate,
  setFetchAllNote,
}) => {
  const [tagtext, setTagtext] = useState("");
  const handleTags = () => {
    if (!tagtext) return;
    setNote((prev) => ({
      ...prev,
      tags: [...prev.tags, tagtext],
    }));
    setTagtext("");
  };
  const handleClick = async (e) => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    if (isUpdate) {
      try {
        const res = await fetch(`${apiBaseUrl}/api/note/${note._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        });
        if (!res.ok) {
          throw new Error("Can't update the note");
        }
        setFetchAllNote(true);
        setNote({ title: "", content: "", tags: [] });
        setIsUpdate(false);
      } catch (error) {
        console.error(error.message);
      }
      return;
    }
    handleSubmit(e);
  };
  return (
    <>
      <button
        className="fixed bottom-4 right-5 flex size-10 cursor-pointer items-center justify-center rounded-lg bg-violet-700 transition-all hover:scale-125"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <IoIosAdd className="size-7 text-white" />
      </button>
      <dialog id="my_modal_2" ref={dialogRef} className="modal">
        <div className="modal-box">
          <form method="dialog" className="modal-backdrop">
            <button
              className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-black"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="pl-1 text-lg font-medium text-zinc-400">Title!</h3>
          <input
            type="text"
            value={note.title}
            onChange={(e) =>
              setNote((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="I will do something positive"
            className="input input-bordered mb-3 w-full text-lg font-semibold"
          />
          <h3 className="pl-1 text-lg font-medium text-zinc-400">Content</h3>
          <textarea
            placeholder="Bio"
            value={note.content}
            onChange={(e) =>
              setNote((prev) => ({ ...prev, content: e.target.value }))
            }
            className="textarea textarea-bordered textarea-sm mb-2 w-full"
          ></textarea>
          <div className="mb-4 w-full">
            <h3 className="pl-1 text-lg font-medium text-zinc-400">#Tags</h3>
            <div className="mb-2">
              {note.tags?.map((tag) => (
                <span
                  key={crypto.randomUUID()}
                  className="mr-1 rounded-md bg-violet-200 px-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-60"
                value={tagtext}
                onChange={(e) => setTagtext(e.target.value)}
              />
              <button className="btn btn-square" onClick={handleTags}>
                <IoIosAdd className="size-8" />
              </button>
            </div>
          </div>
          <button
            className="btn btn-secondary btn-active"
            type="submit"
            onClick={handleClick}
            disabled={loading ? "disabled" : ""}
          >
            <span className={loading ? "loading loading-spinner" : ""}></span>
            {isUpdate ? "Update" : "Submit"}
          </button>
        </div>
      </dialog>
      {/* <DialogSke /> */}
    </>
  );
};

export default Modal;
