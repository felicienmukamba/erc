import build22 from '@/assets/images/home/Rectangle 22.png'
import build24 from '@/assets/images/home/Rectangle 24.png'
import build26 from '@/assets/images/home/Rectangle 26.png'
import build28 from '@/assets/images/home/Rectangle 28.png'
import build30 from '@/assets/images/home/Rectangle 30.png'
import build32 from '@/assets/images/home/Rectangle 32.png'
import build31 from '@/assets/images/home/Rectangle 31.png'
import build33 from '@/assets/images/home/Rectangle 33.png'

const ServicesSection = () => {
  return (
    <div className="my-12 flex flex-col justify-center items-center">
      <div className='w-full lg:w-8/12 px-4'>
        <div className="flex flex-col items-center justify-center divide-y">
          <div className="w-full h-1 bg-slate-950 mb-5"></div>
          <button className="bg-[#12284C] text-slate-50 rounded-2xl p-2 mb-4 absolute">Nos secteurs d'activités</button>
        </div>
        <div className='w-full my-12'>
          <p className='text-center my-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className='flex flex-wrap justify-center items-center gap-4 my-3'>
            {[{title: "Bâtiments industriels", img: build22},
              {title: "Résidentiels et commerciaux", img: build24},
              {title: "Génie civil", img: build26},
              {title: "Terrassement & Travaux routiers", img: build28},
              {title: "Bureau d’architecture", img: build30},
              {title: "Infrastructures Sanitaires", img: build32},
              {title: "Formations", img: build31},
              {title: "Encadrement de la jeunesse", img: build33}
            ].map((service, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="h-full rounded-lg overflow-hidden shadow-lg group">
                  <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950 to-green-800">{service.title}</h6>
                  <div className="overflow-hidden">
                    <img className="w-full h-32 object-cover transform transition-transform duration-500 group-hover:scale-110" src={service.img} alt={service.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col my-20'>
          <h6 className='font-bold text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
          <p className='mt-4 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection