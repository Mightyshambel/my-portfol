import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed top-0 flex w-full items-center justify-between flex-wrap bg-cyan-950 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="fill-current h-10 w-10 mr-2"
          width="54"
          height="54"
          src="1.png"
          alt="image description"
        ></img>
        <span className="font-semibold text-xl tracking-tight text-cyan-400">
          Mighty Shambel
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm ">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-400 mr-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-400 mr-4"
          >
            About me
          </Link>
          <Link
            to="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-400 mr-4"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-cyan-400 hover:bg-white mt-4 lg:mt-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
