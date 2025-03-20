import build24 from '@/assets/images/home/Rectangle 24.png'
import build26 from '@/assets/images/home/Rectangle 26.png'
import build17 from '@/assets/images/home/Rectangle 17.png'
import build15 from '@/assets/images/home/Rectangle 15.png'
import build33 from '@/assets/images/home/Rectangle 33.png'
import build22 from '@/assets/images/home/Rectangle 22.png'
import constructionsilhouette1 from '@/assets/images/home/construction-silhouette1.png'
import build28 from '@/assets/images/home/Rectangle 28.png'
import build32 from '@/assets/images/home/Rectangle 32.png'
import build30 from '@/assets/images/home/Rectangle 30.png'
import build31 from '@/assets/images/home/Rectangle 31.png'
import build38 from '@/assets/images/home/Rectangle 38.png'
import build36 from '@/assets/images/home/Rectangle 36.png'
import build37 from '@/assets/images/home/Rectangle 37.png'
import build40 from '@/assets/images/home/Rectangle 40.png'
import HeroSection from "@/components/clarity/HeroSection"
import Header from "@/components/shared/Header"
import searchIcon from '@/assets/images/clarity/Search.png'

const Clarity = () => {
  return (
    <div>
      <HeroSection>
        <Header />
      </HeroSection>
      <div className='flex flex-col justify-center items-center'>
        <div className='p-10 bg-gradient-to-r from-green-950 to-green-800 m-10 rounded-2xl w-full lg:w-10/12'>
          <div className='flex justify-end items-end mb-6'>
            <input type="search" name="search" id="search" placeholder="Search" className="p-2 rounded-l-lg text-white w-[260px] h-[35px] border" />
            <button className="p-2 bg-green-50 rounded-r-lg h-[35px]">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
          <div className='flex w-full flex-col md:flex-row gap-6'>
            <div className='flex flex-col gap-6 m-1 w-full md:w-6/12'>
              <div className="w-full h-full rounded overflow-hidden shadow-lg group">
                <img className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" src={build40} alt="Sunset in the mountains" />
                <div className="px-6 py-4 bg-white transition-transform duration-500 group-hover:bg-gray-100">
                  <button className="font-bold mb-2 p-2 bg-gradient-to-r from-green-950 to-green-800 text-white rounded">View detail</button>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap w-full md:w-6/12 gap-6'>
              {[build26, build17, build15, build17].map((src, index) => (
                <div key={index} className='flex flex-col w-full sm:w-70 md:w-75 lg:w-75 xl:w-75'>
                  <div className="rounded overflow-hidden shadow-lg group">
                    <img className="w-full h-[160px] object-cover transform transition-transform duration-500 group-hover:scale-110" src={src} alt="Sunset in the mountains" />
                    <div className="px-6 py-4 bg-white transition-transform duration-500 group-hover:bg-gray-100">
                      <button className="font-bold mb-2 p-2 bg-gradient-to-r from-green-950 to-green-800 text-white rounded">View detail</button>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded h-1 my-6 bg-gradient-to-r from-green-50 to-green-950"></div>

      <div className='flex flex-col justify-center items-center my-14 px-4'>
        <h6 className='my-5 w-full lg:w-7/12 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h6>
        <div className='relative w-full flex justify-center'>
          <img className='w-full lg:w-[883px] h-auto lg:h-[498px] rounded' src={build33} alt="build33" />
          <div className='p-6 shadow bg-white rounded-xl w-full sm:w-[469px] absolute bottom-[-100px] left-4 lg:left-[100px]'>
            <button className='p-2 text-white my-2 rounded-xl bg-gradient-to-r from-green-950 to-green-800'>
              Formation et encadrement de la jeunesse
            </button>
            <p className='my-2'>
              Formation et encadrement de la jeunesse Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <p className='text-[#056839]'>
              Contactez-nous au +243 970458935 | info@ecr-drc.com
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-40'>
        <div className='w-full lg:w-full flex flex-wrap justify-center items-center gap-4'>
          {[build28, build32, build36, constructionsilhouette1, build22, build37, build38, build31, build40].map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg group">
                <div className="overflow-hidden">
                  <img className='w-full h-[240px] object-cover transform transition-transform duration-300 group-hover:scale-110' src={src} alt="image" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Lorem ipsum dolor sit amet</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-12 flex flex-col justify-center items-center px-4">
        <div className="w-full lg:w-8/12">
          <div className="flex flex-col items-center justify-center relative mb-5">
            <div className="w-full h-1 bg-slate-950"></div>
            <button className="bg-[#12284C] text-slate-50 rounded-2xl p-2 absolute transform -translate-y-2">Nos secteurs d'activites</button>
          </div>
          <div className="w-full my-12">
            <p className="text-center my-2 px-4 lg:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 my-3">
              {[
                { src: build22, title: "Bâtiments industriels" },
                { src: build24, title: "résidentiels et commerciaux" },
                { src: build26, title: "Génie civil" },
                { src: build28, title: "Terrassement & Travaux routiers" },
                { src: build30, title: "Bureau d’architecture" },
                { src: build32, title: "Infrastructures Sanitaires" },
                { src: build31, title: "Formations" },
                { src: build33, title: "Encadrement de la jeunesse" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="w-full sm:w-60 h-32 my-4 relative overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 focus-within:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-950 to-green-800 opacity-75 flex items-center justify-center transition-opacity duration-300 hover:opacity-90 focus:opacity-90">
                    <h6 className="text-white p-2">{item.title}</h6>
                  </div>
                  <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 focus:scale-110" src={item.src} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col my-20">
            <h6 className="font-bold text-center my-2 px-4 lg:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
            <p className="text-center px-4 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clarity