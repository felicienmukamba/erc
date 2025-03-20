import logoWhite from '@/assets/images/home/Logo_-White 1.png'
import location from '@/assets/images/footer/Place Marker.png'
import tel from '@/assets/images/footer/Phone.png'
import email from '@/assets/images/footer/Letter.png'

import facebook from '@/assets/images/home/Facebook.png'
import instagram from '@/assets/images/home/Instagram Circle.png'
import linkedin from '@/assets/images/home/LinkedIn Circled.png'
import twitter from '@/assets/images/home/X.png'
import youtube from '@/assets/images/home/YouTube.png'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#12284C] to-[#056839] p-6'>
      <div className='flex flex-col md:flex-row md:justify-between items-start'>
        <div className='flex flex-col mb-6 md:mb-0'>
          <div>
            <img src={logoWhite} alt="logo-site" />
          </div>
          <div className="w-50 h-[1px] bg-slate-50 mb-5 my-2"></div>
          <div>
            <ul className='flex flex-col text-white space-y-2'>
              <li className='hover:underline hover:scale-105 transition-all'>À propos de nous</li>
              <li className='hover:underline hover:scale-105 transition-all'>Pourquoi nous choisir</li>
              <li className='hover:underline hover:scale-105 transition-all'>Témoignage</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col mb-6 md:mb-0'>
          <div className='text-white'>
            <h6>Contact</h6>
          </div>
          <div className="w-50 h-[1px] bg-slate-50 mb-5 my-2"></div>
          <div>
            <ul className='flex flex-col text-white space-y-2'>
              <li className='flex items-center hover:underline hover:scale-105 transition-all'>
                <img className='mr-2' src={tel} alt="" />
                <p>+243 970458935</p>
              </li>
              <li className='flex items-center hover:underline hover:scale-105 transition-all'>
                <img className='mr-2' src={email} alt="" />
                <p>info@ecr-drc.com</p>
              </li>
              <li className='flex items-center hover:underline hover:scale-105 transition-all'>
                <img className='mr-2' src={location} alt="" />
                <p>Industrielle</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col mb-6 md:mb-0'>
          <div className='text-white'>
            <h6>Menus</h6>
          </div>
          <div className="w-50 h-[1px] bg-slate-50 mb-5 my-2"></div>
          <div>
            <ul className='flex flex-col text-white space-y-2'>
              <li className='hover:underline hover:scale-105 transition-all'><a href="/">Accueil</a></li>
              <li className='hover:underline hover:scale-105 transition-all'><a href="/realisations">Réalisations</a></li>
              <li className='hover:underline hover:scale-105 transition-all'><a href="/appropos">À propos</a></li>
              <li className='hover:underline hover:scale-105 transition-all'><a href="/team">Equipe</a></li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-white'>
            <h6>Social media</h6>
          </div>
          <div className="w-50 h-[1px] bg-slate-50 opacity-60 mb-5 my-2"></div>
          <div>
            <div className="py-2 flex space-x-2">
              <img className='w-6 hover:underline hover:scale-105 transition-all' src={youtube} alt="youtube icone" />
              <img className='w-6 hover:underline hover:scale-105 transition-all' src={facebook} alt="facebook icone" />
              <img className='w-6 hover:underline hover:scale-105 transition-all' src={instagram} alt="instagram icone" />
              <img className='w-6 hover:underline hover:scale-105 transition-all' src={linkedin} alt="linkedin icone" />
              <img className='w-6 hover:underline hover:scale-105 transition-all' src={twitter} alt="twitter icone" />
            </div>
            <h2 className='text-white font-bold mt-4'>Subscribe to our Newsletter</h2>
            <form className='flex relative mt-2'>
              <input className='bg-white p-2 rounded-l-2xl w-full' type="email" name="email" id="email" placeholder='Enter your Email' />
              <button className='bg-gradient-to-r from-[#12284C] to-[#056839] rounded-r-2xl text-white px-4'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-50 mb-5 mt-5"></div>
      <div className='text-center text-white'>
        <p>Copyright ERC @2025 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer