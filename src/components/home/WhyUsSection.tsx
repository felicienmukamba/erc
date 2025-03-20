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
            <div className='flex flex-col lg:flex-row items-center justify-between w-full lg:w-10/12 px-4 lg:px-0'>
                <div className='w-full lg:w-1/2 relative'>
                    <div className='w-full flex flex-wrap'>
                        <div className='w-1/2 sm:w-5/12 flex justify-end items-end'>
                            <img className='w-full max-w-xs h-auto m-1' src={build15} alt="build icon" />
                        </div>
                        <div className='w-1/2 sm:w-5/12'>
                            <img className='w-full max-w-xs h-auto m-1' src={build16} alt="build icon" />
                        </div>
                        <div className='w-1/2 sm:w-5/12 flex justify-end items-start'>
                            <img className='w-full max-w-xs h-auto m-1' src={build18} alt="build icon" />
                        </div>
                        <div className='w-1/2 sm:w-5/12 flex items-start justify-start'>
                            <img className='w-full max-w-xs h-auto m-1' src={build17} alt="build icon" />
                        </div>
                    </div>
                    <div className='w-36 h-36 rounded-full bg-slate-100 opacity-90 items-center justify-center flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <img className='w-20 h-20' src={logo} alt="logo" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
                    <div className='flex items-center justify-between'>
                        <div className="w-20 h-2 bg-gradient-to-r from-green-950 to-green-800"></div>
                        <div className="p-1 rounded bg-gradient-to-r from-green-950 to-green-800 flex items-center justify-center space-x-2">
                            <img className='w-7' src={youtube} alt="youtube icon" />
                            <img className='w-7' src={facebook} alt="facebook icon" />
                            <img className='w-7' src={instagram} alt="instagram icon" />
                            <img className='w-7' src={linkedin} alt="linkedin icon" />
                            <img className='w-7' src={twitter} alt="twitter icon" />
                        </div>
                    </div>
                    <h2 style={styles.text} className='text-3xl font-bold mt-4'>Pourquoi travailler avec nous ?</h2>
                    <p className='text-2xl text-slate-950 mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                    <h6 className='mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h6>
                    <p className='rounded bg-gradient-to-r from-green-950 to-green-800 text-white p-4 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    </p>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyUsSection
