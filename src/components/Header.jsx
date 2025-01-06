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
      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
      }, []);

      return (
        <div className={`fixed top-0 flex flex-wrap justify-between w-full z-30 items-center px-4  md:px-10 lg:px-20 text-white ${isScrolled ? 'bg-zinc-800' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <img
          className="h-16 w-auto md:h-20 lg:h-32 font-bold"
          src="logoo.png"
          alt="image description"
        />
      </div>
       
      <div className="hidden lg:block flex-grow">
        <div className="flex justify-end items-center space-x-6">
          <Link to="/" className="text-white text-lg hover:text-pink-500">Home</Link>
          <Link to="/about" className="text-white text-lg hover:text-pink-500">About me</Link>
          <Link to="/projects" className="text-white text-lg hover:text-pink-500">Projects</Link>
          <a href="https://drive.google.com/file/d/1_fkyApRL2dMA6zOSfSQUuIJLh6YCp-G3/view?usp=sharing" 
         className="text-white text-lg hover:text-pink-500">Resume</a>
          <Link to="/contact" 
        className="inline-block text-lg px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white">
        Lets chat
          </Link>
        </div>
      </div>
      
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 rounded border border-white"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-zinc-800 p-4 space-y-3">
          <Link to="/" className="block text-white hover:text-pink-500">Home</Link>
          <Link to="/about" className="block text-white hover:text-pink-500">About me</Link>
          <Link to="/projects" className="block text-white hover:text-pink-500">Projects</Link>
          <a href="https://drive.google.com/file/d/1_fkyApRL2dMA6zOSfSQUuIJLh6YCp-G3/view?usp=sharing" 
         className="block text-white hover:text-pink-500">Resume</a>
          <Link to="/contact" className="block text-white hover:text-pink-500">Lets chat</Link>
        </div>
      )}
      
        </div>
      );
}

export default Header;
