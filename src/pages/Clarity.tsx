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
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardFooter } from "@/components/ui/card"

  
const Clarity = () => {
  return (
    <div>
      <HeroSection>
          <Header/>
      </HeroSection>

      <div className='flex flex-col justify-center items-center'>
        <div className='w-8/12 p-10 bg-gradient-to-r from-green-950 to-green-800 m-10 rounded-2xl'>
            <div className='flex justify-end items-end mb-6'>
              <input 
                type="search" 
                name="search" 
                id="search"  
                placeholder="Search" 
                className="p-2 rounded-l-lg text-white w-[260px] h-[35px] border"
              />
              <button className="p-2 bg-green-50 rounded-r-lg  h-[35px]  ">
                <img src="" alt="Search" />
              </button>
            </div>
            <div className='w-full flex'>
          <div className='w-1/2 h-100 flex flex-col gap-6'>
          <Card className="relative rounded-lg border m-5 shadow-lg h-full">
            <img className='absolute inset-0 w-full h-full object-cover rounded-lg' src={build24} alt="image" />
            <CardContent className="relative z-10 p-5 bg-gradient-to-t from-black/50 to-transparent rounded-lg h-full">
          <CardAction>
            <Button className="h-11 font-bold bg-gradient-to-r from-green-950 to-green-800 text-white w-full mt-4">View detail</Button>
          </CardAction>
          <CardFooter className="flex flex-col mt-4">
            <h6 className="text-2xl font-bold mb-2 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </h6>
            <div className="w-full h-1 bg-slate-950 my-5"></div>
            <p className="font-bold text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt
            </p>
          </CardFooter>
            </CardContent>
          </Card>
          </div>
          <div className='w-1/2 flex flex-wrap'>
          <Card className="relative rounded-lg border w-1/2 p-5 shadow-lg h-">
            <img className='absolute inset-0 w-full h-full object-cover rounded-lg' src={build26} alt="image" />
            <CardContent className="relative z-10 p-5 bg-gradient-to-t from-black/50 to-transparent rounded-lg h-full">
              <CardAction>
            <Button className="h-11 font-bold bg-gradient-to-r from-green-950 to-green-800 text-white w-full mt-4">View detail</Button>
              </CardAction>
              <CardFooter className="flex flex-col mt-4">
            <p className="font-bold text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt
            </p>
              </CardFooter>
            </CardContent>
          </Card>
          
          <Card className="relative rounded-lg border w-1/2 p-5 shadow-lg h-1/2">
            <img className='absolute inset-0 w-full h-full object-cover rounded-lg' src={build17} alt="image" />
            <CardContent className="relative z-10 p-5 bg-gradient-to-t from-black/50 to-transparent rounded-lg h-full">
              <CardAction>
            <Button className="h-11 font-bold bg-gradient-to-r from-green-950 to-green-800 text-white w-full mt-4">View detail</Button>
              </CardAction>
              <CardFooter className="flex flex-col mt-4">
            <p className="font-bold text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt
            </p>
              </CardFooter>
            </CardContent>
          </Card>
          
          <Card className="relative rounded-lg border w-1/2 p-5 shadow-lg h-1/2">
            <img className='absolute inset-0 w-full h-full object-cover rounded-lg' src={build15} alt="image" />
            <CardContent className="relative z-10 p-5 bg-gradient-to-t from-black/50 to-transparent rounded-lg h-full">
              <CardAction>
            <Button className="h-11 font-bold bg-gradient-to-r from-green-950 to-green-800 text-white w-full mt-4">View detail</Button>
              </CardAction>
              <CardFooter className="flex flex-col mt-4">
            <p className="font-bold text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt
            </p>
              </CardFooter>
            </CardContent>
          </Card>
          
          <Card className="relative rounded-lg border w-1/2 p-5 shadow-lg h-1/2">
            <img className='absolute inset-0 w-full h-full object-cover rounded-lg' src={build17} alt="image" />
            <CardContent className="relative z-10 p-5 bg-gradient-to-t from-black/50 to-transparent rounded-lg h-full">
              <CardAction>
            <Button className="h-11 font-bold bg-gradient-to-r from-green-950 to-green-800 text-white w-full mt-4">View detail</Button>
              </CardAction>
              <CardFooter className="flex flex-col mt-4">
            <p className="font-bold text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt
            </p>
              </CardFooter>
            </CardContent>
          </Card>
          
          </div>
          </div>
        </div>
        <div className="w-full rounded h-1 my-6 bg-gradient-to-r from-green-50 to-green-950"></div>
      </div>
      <div className='flex flex-col justify-center items-center my-14'>
        <h6 className='my-5 w-7/12 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
        <div>
          <img className='w-[883px] h-[498px] rounded' src={build33} alt="build33" />
          <div className='p-6 shadow bg-white rounded-xl w-[469px]  absolute mt-[-200px] mr-[-100px] '>
            <button className='p-2 text-white my-2 rounded-xl bg-gradient-to-r from-green-950 to-green-800'> Formation et encadrement de la jeunesse</button>
            <p className='my-2'> Formation et encadrement de la jeunesse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            <p className='text-[#056839]'>Contactez-nous au +243 970458935 | info@ecr-drc.com</p>
          </div>
        </div>
      </div>
      <div className=' flex flex-wrap justify-center items-center'>
      <div className=' w-10/12 flex flex-wrap justify-center items-center'>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={build28} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full  h-[240px]  rounded mb-3' src={build32} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={build36} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={constructionsilhouette1} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={build22} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={build37} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={build38} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={build31} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 m-2">
          <Card className="w-[392px] rounded shadow">
            <CardContent>
                <img className='w-full h-[240px] rounded mb-3' src={build40} alt="image" />
                <CardAction><Button className=""> View detail</Button></CardAction>
                <CardFooter className="flex flex-col">
                    <h6 className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet
                    </h6>
                </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>

      <div className="my-12 flex flex-col justify-center items-center">
        <div className='w-8/12'>
            <div className="flex flex-col items-center justify-center divide-y ">
                <div className="w-8/12 h-1 divide-slate-950 mb-5"></div>
                <button className="bg-[#12284C] text-slate-50 rounded-2xl p-2 mb-4 absolute">Nos secteurs d'activites</button>
            </div>
            <div className=' w-full my-12'>
                <p className='text-center my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='flex flex-wrap justify-center items-center gap-2 my-3'>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Bâtiments industriels</h6>
                        <img className="w-100 h-full" src={build22} alt="" />
                    </div>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">résidentiels et commerciaux</h6>
                        <img className="w-100 h-full" src={build24} alt="" />
                    </div>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Génie civil</h6>
                        <img className="w-100 h-full" src={build26} alt="" />
                    </div>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Terrassement & Travaux routiers</h6>
                        <img className="w-100 h-full" src={build28} alt="" />
                    </div>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Bureau d’architecture</h6>
                        <img className="w-100 h-full" src={build30} alt="" />
                    </div>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Infrastructures Sanitaires</h6>
                        <img className="w-100 h-full" src={build32} alt="" />
                    </div>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Formations</h6>
                        <img className="w-100 h-full" src={build31} alt="" />
                    </div>
                    <div className="w-60 h-32">
                        <h6 className="text-white p-2 h-14 bg-gradient-to-r from-green-950  to-green-800">Encadrement de la jeunesse</h6>
                        <img className="w-100 h-full" src={build33} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col my-20'>
                <h6 className='font-bold text-center my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                <p className='text-center'>
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
