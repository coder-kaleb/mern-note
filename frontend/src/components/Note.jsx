import { VscPinned } from "react-icons/vsc";
import { GoTrash } from "react-icons/go";
import { GiPencil } from "react-icons/gi";
const Note = () => {
  return (
    <div className="max-w-[470px] flex-1 min-w-80 rounded-md shadow-transparent transition duration-300 hover:shadow-lg px-2 py-2 flex flex-col relative border border-slate-300 w-full">
    <VscPinned className="absolute text-violet-600 right-2 top-3 size-5 cursor-pointer hover:scale-125 transition-all scale-100" />
      <h2 className="font-semibold text-lg">This the tiltle</h2>
      <span className="text-sm mb-3 font-semibold text-gray-400">2 days ago</span>
      <p className="mb-1 text-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem
        dolor dolorum iusto aperiam? Facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aspernatur, illum?
      </p>
      <p className="font-light">#note, #this, #that</p>
      <div className="absolute bottom-4 right-2 flex gap-5">
      <GiPencil className="cursor-pointer  hover:scale-125 transition-all scale-100" />
        <GoTrash className="cursor-pointer  hover:scale-125 transition-all scale-100" />
      </div>
    </div>
  );
};

export default Note;
