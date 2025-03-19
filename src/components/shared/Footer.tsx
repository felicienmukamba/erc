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
    <div className='bg-gradient-to-r from-[#12284C]  to-[#056839] p-6'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
            <div>
                <img src={logoWhite} alt="logo-site" />
            </div>
            <div className="w-50 h-[1px] bg-slate-50 mb-5  my-2"></div>
            <div>
                <ul className='flex flex-col text-white'>
                    <li>À propos de nous</li>
                    <li>Pourquoi nous choisir</li>
                    <li>Témoignage</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='text-white'>
                <h6>Contact</h6>
            </div>
            <div className="w-50 h-[1px] bg-slate-50 mb-5  my-2"></div>
            <div>
                <ul className='flex flex-col text-white'>
                    <li className='flex'>
                        <img className='mx-1' src={tel} alt="" />
                        <p>À propos de nous</p>
                    </li>
                    <li className='flex'>
                        <img className='mx-1' src={email} alt="" />
                        <p>info@ecr-drc.com</p>
                    </li>
                    <li className='flex'>
                        <img className='mx-1' src={location} alt="" />
                        <p>ÀRef: Industrielle</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col'>
            <div  className='text-white'>
                <h6>Menus</h6>
            </div>
            <div className="w-50 h-[1px] bg-slate-50 mb-5 my-2"></div>
            <div>
                <ul className='flex flex-col text-white'>
                    <li>Accueil</li>
                    <li>Réalisations</li>
                    <li>Appropos</li>
                    <li>Equipe</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col'>
            <div  className='text-white'>
                <h6>Social media</h6>
            </div>
            <div className="w-50 h-[2px] bg-slate-50 opacity-60 mb-5 my-2"></div>
            <div>
                <div className="py-2 flex">
                    <img className='w-9 mr-1' src={youtube} alt="youtube icone" />
                    <img className='w-9 mx-1' src={facebook} alt="facebook icone" />
                    <img className='w-9 mx-1' src={instagram} alt="instagram icone" />
                    <img className='w-9 mx-1' src={linkedin} alt="linkedin icone" />
                    <img className='w-9 mx-1' src={twitter} alt="twitter icone" />
                </div>
                <h2 className='text-white font-bold'>Subscribe to our Newsletter</h2>
                <form action="" method="post" className='flex'>
                    <input className='bg-white p-4 rounded-2xl w-sm' type="email" name="email" id="email" placeholder='Enter your Email' />
                    <button className='bg-gradient-to-r from-[#12284C]  to-[#056839] rounded-2xl text-white p-4 absolute right-6'>Subscribe</button>
                </form>
            </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-50 mb-5 mt-5"></div>

      <div className='text-center text-white'>
        <p>Copyright ERC @2025 All reserved</p>
      </div>
    </div>
  )
}

export default Footer
