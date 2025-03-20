import { ReactNode } from "react";
import '@/styles/home.css'

const HeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-hero h-screen bg-cover bg-center">
      <div className="p-6">
        {children}
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col items-center w-full px-4 lg:w-7/12">
          <h6 className="text-center font-bold text-white text-2xl md:text-4xl mb-5">
            Espace d’excellence de mise <br />
            en œuvre, études et Réalisations <br />
            de projet de construction.
          </h6>
          <div className="w-full h-1 bg-slate-50 mb-5"></div>
          <p className="text-center text-white text-lg md:text-2xl mt-4 my-5">
            Nous vous accompagnons dans vos projets de construction.
          </p>
        </div>
        <div className="my-4 px-4">
          <p className="text-white text-center text-base md:text-lg">
            Un service de construction qui répond aux normes architecturales
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-white w-full px-4">
          <button className="w-full md:w-44 mx-4 my-2 md:my-0 h-12 border rounded-2xl hover:bg-green-700">
            Lorem ipsum
          </button>
          <button className="w-full md:w-44 mx-4 my-2 md:my-0 h-12 bg-slate-50 text-slate-950 rounded-2xl hover:bg-gray-300">
            Lorem ipsum
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection