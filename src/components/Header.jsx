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
      <div className="flex lg:flex-1">
        <img
          className="h-16 w-auto"
          src="logoo.png"
          alt="image description"
        />
      </div>
       
      <div className="  w-full  lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow ">
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
        
        <Link
          to="/contact"
          className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0"
          style={{ fontFamily: 'lora, lora' }}
        >
          Lets chat
        </Link>
      </div>
      
      <div className=" block lg:hidden ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white "
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-pink-500">Home</Link>
          <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-pink-500">About me</Link>
          <Link to="/projects" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-pink-500">Projects</Link>
          <Link to="/resume" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-pink-500">Resume</Link>
          <Link to="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-pink-500">Let's chat</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
