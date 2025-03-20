import { ReactNode } from "react";
import '@/styles/home.css'

const HeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-hero-clarity h-screen bg-cover bg-center ">
      <div className="p-6">
        {children}
      </div>
      <div className="flex flex-col justify-center items-center mt-1">

        <div className=" flex flex-col items-center w-7/12 mt-10">
        <div className="w-100 rounded h-2 bg-gradient-to-r from-green-50 to-green-950 my-5"></div>
        <div className="flex justify-center items-center my-12">
        <div className="bg-opacity-20 backdrop-filter backdrop-blur-lg text-white text-4xl text-center my-1 rounded-2xl p-6 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum,
</div>
      </div>
          <h6 className="text-center font-bold text-white text-2xl mb-5">
            Depuis sa création en 2017, ECR a réalisé au fil des ans des 
            projets prestigieux tels que la construction de résidences, 
            de bâtiments commerciaux et industriels, d’écoles, 
            d’églises et d’autres bâtiments d’utilité publique.
          </h6>
          <div className="w-50 h-1 bg-slate-50 my-5"></div>
          <p className="text-center text-white text-sm mt-4 my-5 font-semibold"> Auteur de projets ambitieux et innovants, la société tend rapidement à s’imposer comme l’un des Majors 
          dans la construction au Kivu grâce à son équipe dynamique et expérimentée. </p>

        </div>
        <div className="flex justify-center text-white">
            <button className="w-44 mx-4 h-12 border rounded-2xl hover:bg-green-700">Lorem ipsum</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
