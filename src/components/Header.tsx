'use client';
import { TbSquareRoundedLetterMFilled } from "react-icons/tb";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import { Button } from "@/components/ui/buttons";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 relative">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <TbSquareRoundedLetterMFilled className="w-8 h-8 text-primary-foreground ml-2" />
        </div>
        <h2 className="text-2xl font-bold text-primary">ohamed Mujtaba</h2>
      </div>
      
      {/* Hamburger Button for small screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="flex items-center justify-center w-10 h-10">
          <FaBars className="text-primary w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links for larger screens */}
      <nav className={`absolute top-full right-0  text-black font-bold shadow-md rounded mt-2 ${isOpen ? 'block' : 'hidden'} md:static md:flex md:bg-transparent md:shadow-none`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
          <li>
            <Button variant="link" asChild>
              <Link 
                to="projects" 
                smooth={true} 
                duration={1000}
                offset={-70}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link 
                to="skills" 
                smooth={true} 
                duration={1000}
                offset={-70}
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link 
                to="contact" 
                smooth={true} 
                duration={1000}
                offset={-70}
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}