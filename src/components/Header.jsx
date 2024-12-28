import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className={`fixed top-0 flex w-full z-30 items-center pl-20 pr-20 text-white ${isScrolled ? 'bg-zinc-800' : 'bg-transparent'}`}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="fill-current h-32 w-32 "
          src="logoo.png"
          alt="image description"
        />
       
      </div>
      <div className="flex-grow"></div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
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
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-pink-500 mr-10"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-pink-500 mr-10"
          >
            About me
          </Link>
          <Link
            to="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-pink-500 mr-10"
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1_fkyApRL2dMA6zOSfSQUuIJLh6YCp-G3/view?usp=sharing"
            className="block mt-4 lg:inline-block lg:mt-0 text-white text-xl hover:text-pink-500 mr-10"
          >
            Resume
          </a>
        </div>
        <div className="flex-grow"></div>
        <Link
          to="/contact"
          className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0"
          style={{ fontFamily: 'lora, lora' }}
        >
          Lets chat
        </Link>
      </div>
    </div>
  );
}

export default Header;
