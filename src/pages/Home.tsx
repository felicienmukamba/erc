import Header from "@/components/shared/Header"
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import WhyUsSection from '../components/home/WhyUsSection';

const Home = () => {
  return (
    <div>
        <div>
            <HeroSection>
                <Header/>
            </HeroSection>
            <PartnerSection/>
            <WhyUsSection/>
            <div className="flex flex-col items-center justify-center mt-10  divide-y ">
              <div className="w-8/12 h-1 divide-slate-950 mb-5"></div>
              <button className="bg-[#12284C] text-slate-50 rounded-2xl p-2 mb-4 absolute">Nos secteurs d'activites</button>
            </div>


        </div>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
