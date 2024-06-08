import Modal from "../components/Modal";
import Note from "../components/Note";
const DashboardNote = () => {
  return (
    <section className=" h-screen relative w-full p-5 ">
    <div className="flex flex-wrap gap-4 w-f">

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
    <Modal />
    </section>
  );
};

export default DashboardNote;
