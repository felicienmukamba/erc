import { ReactNode } from "react";
import '@/styles/home.css'

const HeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-hero-about h-screen bg-cover bg-center">
      <div className="p-6">
        {children}
      </div>
      <div className="flex flex-col justify-center items-center mt-11">
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-full h-1 bg-gradient-to-r from-[#fff]  to-[#056839] mb-5"></div>
        <div className=" flex flex-col items-center ">
          <h6 className="text-center font-bold text-white text-4xl mb-5">
          Etude, Conception et Réalisation
          </h6>
          <p className="text-center text-white text-2xl mt-4 my-5">Nous vous accompagnons dans vos projets de construction.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
