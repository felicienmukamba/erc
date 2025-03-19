import logoWhite from '@/assets/images/home/Logo_-White 1.png'
import location from '@/assets/images/footer/Place Marker.png'
import tel from '@/assets/images/footer/Phone.png'
import email from '@/assets/images/footer/Letter.png'


const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#12284C]  to-[#056839] p-6'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
            <div>
                <img src={logoWhite} alt="" />
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
            <div className="w-50 h-[1px] bg-slate-50 mb-5   my-2"></div>
            <div>
                <ul className='flex flex-col text-white'>
                    <li>À propos de nous</li>
                    <li>Pourquoi nous choisir</li>
                    <li>Témoignage</li>
                </ul>
                <h6>Subscribe to our Newsletter</h6>
                <form action="" method="post">
                    <input type="email" name="email" id="email" placeholder='Enter your Email' />
                    <button className='bg-gradient-to-r from-[#12284C]  to-[#056839]'>Subscribe</button>
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
