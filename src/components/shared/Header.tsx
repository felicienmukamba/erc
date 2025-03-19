import { NavLink } from "react-router";
import logo from '@/assets/images/home/ICON 1.png';

export default function Header() {
  return (
    <header className="px-8 flex justify-between items-center bg-slate-100 opacity-65 rounded-4xl h-23 mx-9 p-2">
      <div>
        <img className="h-11" src={logo} alt="logo site" />
      </div>
      <nav className="flex justify-items-center">
            <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/">Accueil</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/realisations">Réalisations</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/apropos">Apropos</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "underline text-green-500 mx-3 " : "mx-3 hover:underline")} to="/team">Equipe</NavLink>
      </nav>
      <div>
        <button className="bg-gradient-to-r from-green-950 to-green-700 h-10 rounded-2xl p-2 text-stone-50 font-bold">Contact</button>
      </div>
    </header>
  );
}