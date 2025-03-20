import Header from "@/components/shared/Header"

import mainImage from '@/assets/images/clarity/Rectangle 50.png';
import secondImage1 from '@/assets/images/clarity/Rectangle 55.png';
import secondImage2 from '@/assets/images/clarity/Rectangle 54.png';
import secondImage3 from '@/assets/images/clarity/Rectangle 56.png';


import project1 from '@/assets/images/clarity/projects/Rectangle 0.png'
import project2 from '@/assets/images/clarity/projects/Rectangle 1.png'
import project3 from '@/assets/images/clarity/projects/Rectangle 2.png'
import project4 from '@/assets/images/clarity/projects/Rectangle 3.png'
import project5 from '@/assets/images/clarity/projects/Rectangle 4.png'


const ClarityView = () => {

  const projects = [
    {
      "image" : project1,
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      "image" : project2,
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      "image" : project3,
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      "image" : project4,
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      "image" : project5,
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ]
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className="flex max-sm:flex-col p-10 justify-center">
          <div className="p-2"><img src={mainImage} alt="mainImage" /></div>
          <div>
            <div className="p-2"><img className="max-sm:w-full max-md:w-full" src={secondImage1} alt="secondImage1" /></div>
            <div className="p-2"><img className="max-sm:w-full max-md:w-full" src={secondImage2} alt="secondImage2" /></div>
            <div className="p-2"><img className="max-sm:w-full max-md:w-full" src={secondImage3} alt="secondImage3" /></div>
          </div>
        </div>

        <div className="flex flex-col p-10 justify-center">
          <h4 className="font-bold my-2">Construction d'une villa à KAMITUGA</h4>
          <div className="flex flex-wrap">
            <ul className="flex flex-col">
              <li>Location : Kamituga à Mwenga</li>
              <li>Annee : 2025</li>
            </ul>
          </div>
          <div className=" p-10">
            <h4  className="font-bold my-2">Lorem Ipsum dolorn sit amet </h4>
            <p className="text-justify my-2">
              Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="w-full h-[1px] bg-slate-950 mb-5 mt-5"></div>
        </div>

        <div className="flex flex-col p-10 justify-center">
          <div className="flex flex-wrap justify-center">
            {
              projects.map((project) => (
                <div className="w-[239px] shadow m-2 rounded p-2">
                  <div>
                    <img src={project.image} alt="project1" />
                  </div>
                  <div>
                    <button className="bg-gradient-to-r from-[#12284C]  to-[#056839] text-white p-2 rounded my-1">view details</button>
                    <p className="text-justify my-2">{project.description}</p>
                  </div>
                </div>
              ))
            }

          </div>

        </div>

    </div>
  )
}

export default ClarityView
