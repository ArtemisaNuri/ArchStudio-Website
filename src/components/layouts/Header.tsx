
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate= useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm py-4 px-6 md:px-12 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-xl md:text-2xl font-semibold tracking-tighter"
        >
          ARCH<span className="text-gray-400">STUDIO</span>
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#projects"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Contact
          </a>
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800"
          >
            Get in Touch
          </Button>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#projects"
              className="px-4 py-2 text-sm font-medium text-gray-700"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#services"
              className="px-4 py-2 text-sm font-medium text-gray-700"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium text-gray-700"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get in Touch
            </Button>
           
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
