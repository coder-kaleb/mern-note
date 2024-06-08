import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="px-4 py-4 w-full shadow-sm overflow-hidden">
    <div className="flex justify-between  items-center ">

      <h4 className="font-bold text-2xl ">Not</h4>
      <div className=" max-sm:max-w-56">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="max-w-4 max-h-4 w-full opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>

      <div className="sm:flex gap-2 hidden ">
        <p className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center text-white font-semibold bg-violet-400">
          KM
        </p>
        <Link to="/" className="underline">
          Logout
        </Link>
      </div>

      <div className="dropdown sm:hidden dropdown-left">
        <div tabIndex={0} role="button" className="btn m-1">
          Profile
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] menu p-3 shadow bg-base-100 rounded-box w-48"
        >
          <div className="flex gap-3 items-center">
          <p className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center text-white font-semibold bg-violet-400">
            KM
          </p>
          <Link to="/" className="underline text-xl">
            Logout
          </Link>
          </div>
        </ul>
      </div>
    </div>
    </header>
  );
};

export default Header;
