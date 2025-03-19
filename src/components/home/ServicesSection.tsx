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
    <div className="m-[238px]">
        <div className="flex flex-col items-center justify-center mt-10  divide-y ">
              <div className="w-8/12 h-1 divide-slate-950 mb-5"></div>
              <button className="bg-[#12284C] text-slate-50 rounded-2xl p-2 mb-4 absolute">Nos secteurs d'activites</button>
        </div>
        <div className='my-4 w-full'>
            <p className='text-center my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex flex-wrap justify-center items-center gap-2 my-3'>
                <div className="w-[223px] h-[138px] m-5 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Bâtiments industriels</h6>
                    <img className="w-100 h-full" src={build22} alt="" />
                </div>
                <div className="w-[223px] h-[138px] m-2 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">résidentiels et commerciaux</h6>
                    <img className="w-100 h-full" src={build24} alt="" />
                </div>
                <div className="w-[223px] h-[138px] m-2 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Génie civil</h6>
                    <img className="w-100 h-full" src={build26} alt="" />
                </div>
                <div className="w-[223px] h-[138px] m-2 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Terrassement & Travaux routiers</h6>
                    <img className="w-100 h-full" src={build28} alt="" />
                </div>
                <div className="w-[223px] h-[138px] m-2 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Bureau d’architecture</h6>
                    <img className="w-100 h-full" src={build30} alt="" />
                </div>
                <div className="w-[223px] h-[138px] m-2 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Infrastructures Sanitaires</h6>
                    <img className="w-100 h-full" src={build32} alt="" />
                </div>
                <div className="w-[223px] h-[138px] m-2 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Formations</h6>
                    <img className="w-100 h-full" src={build31} alt="" />
                </div>
                <div className="w-[223px] h-[138px] m-2 mb-6">
                    <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Encadrement de la jeunesse</h6>
                    <img className="w-100 h-full" src={build33} alt="" />
                </div>
            </div>
        </div>
        <div>
            <h6 className='text-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
  )
}

export default ServicesSection
