/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

const Modal = ({ note, setNote, handleSubmit }) => {
  const [tagtext, setTagtext] = useState("");
  // console.log(tagtext);
  return (
    <>
      <button
        className="fixed bottom-4 right-5 flex size-10 cursor-pointer items-center justify-center rounded-lg bg-violet-700 transition-all hover:scale-125"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <IoIosAdd className="size-7 text-white" />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="pl-1 text-lg font-medium text-zinc-400">Title!</h3>
          <input
            type="text"
            value={note.title}
            onChange={(e) =>
              setNote((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="I will do something positive"
            className="input input-bordered mb-3 w-full"
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
                <span key={tag} className="mr-1 rounded-md bg-violet-200 px-1">
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
              <button
                className="btn btn-square"
                onClick={() => {
                  if (!tagtext) return;
                  console.log("what is th");
                  setNote((prev) => ({
                    ...prev,
                    tags: [...prev.tags, tagtext],
                  }));
                  setTagtext("");
                }}
              >
                <IoIosAdd className="size-8" />
              </button>
            </div>
          </div>
          <button
            className="btn btn-secondary btn-active"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
