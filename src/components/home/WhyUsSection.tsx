import facebook from '@/assets/images/home/Facebook.png'
import instagram from '@/assets/images/home/Instagram Circle.png'
import linkedin from '@/assets/images/home/LinkedIn Circled.png'
import twitter from '@/assets/images/home/X.png'
import youtube from '@/assets/images/home/YouTube.png'

import build15 from '@/assets/images/home/Rectangle 15.png'
import build16 from '@/assets/images/home/Rectangle 16.png'
import build17 from '@/assets/images/home/Rectangle 17.png'
import build18 from '@/assets/images/home/Rectangle 18.png'
import logo from '@/assets/images/home/ICON 2.png';

const WhyUsSection = () => {

    const styles = {
        text: {
            background: 'linear-gradient(to right, #0f1e00, green)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
        },
    }
  return (
    <div className='flex flex-col justify-center items-center mt-5 pt-5'>
        <div className='flex items-center justify-between w-8/12'>
            <div className='w-1/2'>
                <div className='w-full flex flex-wrap'>
                    <div className='w-5/12 flex justify-end items-end'><img className='w-60 h-60 m-1' src={build15} alt="build icone" /></div>
                    <div className='w-5/12 '><img className='w-48 h-48 m-1' src={build16} alt="build icone" /></div>
                    <div className='w-5/12 flex justify-end items-start'><img className='w-28 h-28 m-1' src={build18} alt="build icone" /></div>
                    <div className='w-5/12 flex items-start justify-start'><img className='w-44 h-44  m-1' src={build17} alt="build icone" /></div>
                </div>
                <div className='w-44 h-44 rounded-full bg-slate-100 opacity-90 items-center justify-center flex absolute mt-[-300px] ml-55'>
                    <img className='w-20 h-20' src={logo} alt="logo" />
                </div>
                
            </div>
            <div className='w-1/2'>
                <div className='flex items-center justify-between'>
                    <div className="w-50 h-2 bg-gradient-to-r from-green-950  to-green-800 "></div>
                    <div className="p-1 rounded bg-gradient-to-r from-green-950  to-green-800 flex items-center justify-center">
                        <img className='w-7' src={youtube} alt="youtube icone" />
                        <img className='w-7' src={facebook} alt="facebook icone" />
                        <img className='w-7' src={instagram} alt="instagram icone" />
                        <img className='w-7' src={linkedin} alt="linkedin icone" />
                        <img className='w-7' src={twitter} alt="twitter icone" />
                    </div>
                </div>
                <h2 style={styles.text} className='text-3xl font-bold text-gra'>Pourquoi travaillez avec nous ?</h2>
                <p className='text-2xl text-slate-950 '>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt</p>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat.
                </h6>
                <p className='rounded bg-gradient-to-r from-green-950  to-green-800 text-white p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur 
                </p>
            </div>
        
        </div>
    </div>
  )
}

export default WhyUsSection
