import Header from "@/components/shared/Header"
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ServicesSection from "@/components/home/ServicesSection";

const Home = () => {
  return (
    <div>
            <HeroSection>
                <Header/>
            </HeroSection>
            <PartnerSection/>
            <WhyUsSection/>
            <ServicesSection/>
    </div>
  )
}

export default Home
