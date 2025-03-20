import HeroSection from "@/components/about-us/HeroSection"
import Header from "@/components/shared/Header"
import Rectangle59 from "@/assets/images/about/Rectangle 59.png"
import Rectangle62 from "@/assets/images/about/Rectangle 62.png"
import Rectangle63 from "@/assets/images/about/Rectangle 63.png"
import Rectangle72 from "@/assets/images/about/Rectangle 72.png"


const About = () => {

  const services = [
    {
      "title" : "Études topologiques et géologiques",
      "image" : Rectangle72,
      "description" : "Nos études topologiques et géologiques fournissent des informations essentielles sur le terrain et les ressources naturelles d'une région. Elles sont utilisées dans une variété de contextes, notamment la planification de projets de construction, l'exploitation minière, la protection de l'environnement et la recherche scientifique.",
    },
    {
      "title" : "Conception de projets de construction et d'ouvrages d'art",
      "image" : Rectangle72,
      "description" : "Notre équipe de professionnels expérimentés vous accompagnera tout au long du processus de conception de votre projet de construction ou d'ouvrage d'art. Nous vous aiderons à définir vos besoins, à élaborer un plan et à réaliser votre vision.",
    },
    {
      "title" : "Fournitures de matériaux de construction et de bureau",
      "image" : Rectangle72,
      "description" : "Nous fournissons une large gamme de matériaux de construction et de bureau pour répondre à tous vos besoins. Nous proposons des produits de qualité supérieure à des prix compétitifs.",
    },
    {
      "title" : "Formation professionnelle",
      "image" : Rectangle72,
      "description" : "Obtenez les compétences et les connaissances dont vous avez besoin pour lancer une carrière réussie dans le génie civil. Notre formation professionnelle vous prépare à relever les défis de l'industrie et à faire une différence dans le monde.",
    },
  ]
  return (
    <div>
      <HeroSection>
        <Header/>
      </HeroSection>

      <div className="m-10 flex justify-center items-center  max-md:flex-col">
        <div className="w-100 my-2">
          <h6 className="text-green-800 font-bold text-xl my-2">About lorem ipsum</h6>
          <h3 className="font-bold text-lg my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</h3>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div  className="w-100 my-2">
          <img className="max-sm:w-full max-md:w-full" src={Rectangle59} alt="Rectangle59" />
        </div>
      </div>
      <div className="m-10 flex justify-center items-center  max-md:flex-col">
        <div className="mx-10 w-[80%] h-[2px] bg-[#0dd17650] mb-5"></div>
      </div>
      <div className="m-10   flex justify-center items-center  max-md:flex-col">
        <div className="m-2  w-100 bg-gradient-to-r from-[#12284C]  to-[#056839] p-5 rounded-2xl text-white">
          <h6 className="mt-10 mb-2 text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing.</h6>
          <img className="w-full" src={Rectangle62} alt="" />
          <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice .</p>
        </div>

        <div className="m-2 w-100 bg-white p-5 rounded-2xl border border-green-900">
          <h6 className="mt-10  mb-2 text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing.</h6>
          <img className="w-full" src={Rectangle63} alt="" />
          <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice .</p>
        </div>
      </div>


      <div className="">
  <div className="my-10 pt-10 pb-20 px-20 flex justify-between items-start max-md:flex-col bg-gradient-to-r from-[#d9f2e6] to-[#dde7f7]">
    <div className="mt-10 mb-2 w-full max-md:mb-4">
      <h6 className="text-xl font-bold">Nos secteurs d'activités</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div className="mt-10 mb-2 w-full flex justify-end max-md:justify-center max-md:mt-4">
      <button className="bg-gradient-to-r from-green-950 to-green-800 rounded py-1 px-4 text-stone-50 font-bold">Contact</button>
    </div>
  </div>

  <div className="flex justify-center flex-wrap">
    {
      services.map((service) => (
        <div key={service.title} className="border border-green-500 p-5 rounded-2xl m-2 w-[300px] max-sm:w-full">
          <h6 className="text-center mb-2 h-16 font-bold">{service.title}</h6>
          <div className="w-[100%] h-[2px] bg-green-950 mb-5"></div>
          <div className="w-full">
            <img className="w-[243px] h-[118px] max-sm:w-full" src={service.image} alt={service.title} />
          </div>
          <p className="font-light text-sm my-2">{service.description}</p>
        </div>
      ))
    }
  </div>
</div>

      <div className="flex justify-center max-md:flex-wrap max-lg:flex-wrap my-10 " id="contact">
        <div className="w-100 flex flex-col m-5">
          <h6 className="text-lg font-bold ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h6>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="w-100 flex flex-col m-5">
          <form action="flex flex-col">
            <input className=" w-full h-[57px] border rounded p-2 my-2" type="text" name="name" id="name" placeholder="Enter your Name here"/>
            <input className=" w-full h-[57px] border rounded p-2 my-2" type="email" name="email" id="email" placeholder="Enter your Email here"/>
            <button className="rounded bg-gradient-to-r from-[#12284C]  to-[#056839] text-white font-bold p-2 w-full">Send</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default About
