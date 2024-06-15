import nodata from "../assets/nodata.svg";
const CreateNote = () => {
  return (
    <div className="flex w-full items-center justify-center gap-10">
      <img src={nodata} alt="" className="w-full max-w-96" />
      <h1 className="text-4xl font-semibold">Oops!, There is no note😥🤔</h1>
    </div>
  );
};

export default CreateNote;
