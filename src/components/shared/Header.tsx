import { useState } from 'react';
import { NavLink } from "react-router";
import logo from '@/assets/images/home/ICON 1.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-slate-100 opacity-80 rounded-2xl h-auto md:h-16 mx-4 p-4 md:px-8">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img className="h-11 transition-transform transform hover:scale-110" src={logo} alt="logo site" />
        <button className="md:hidden text-lg font-bold transition-transform transform hover:scale-110" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`flex-col md:flex-row ${menuOpen ? 'flex' : 'hidden'} md:flex justify-items-center md:space-x-6 w-full md:w-auto mt-4 md:mt-0`}>
        <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/" onClick={toggleMenu}>Accueil</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/realisations" onClick={toggleMenu}>Réalisations</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/apropos" onClick={toggleMenu}>Apropos</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/team" onClick={toggleMenu}>Equipe</NavLink>
      </nav>
      <div className="hidden md:block mt-4 md:mt-0">
        <button 
          className="bg-gradient-to-r from-green-950 to-green-700 h-10 rounded-2xl px-6 text-stone-50 font-bold transition-transform transform hover:scale-105" 
          onClick={() => window.location.href = '/apropos#contact'}
        >
          Contact
        </button>
      </div>
    </header>
  );
}