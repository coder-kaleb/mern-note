import { IoIosAdd } from "react-icons/io";

const Modal = () => {
  return (
    <>
      <button
        className="fixed cursor-pointer transition-all hover:scale-125 right-5 bottom-4  flex items-center justify-center size-10 bg-violet-700 rounded-lg"
        onClick={() => document.getElementById("my_modal_2").showModal()}
        
      >
        <IoIosAdd className="text-white size-7" />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
