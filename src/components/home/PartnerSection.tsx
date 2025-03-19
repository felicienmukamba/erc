import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import sosImage from '@/assets/images/home/sos-01103035 1.png'
import tmfImage from '@/assets/images/home/tmf-aefa6e8d 1.png'
import msfImage from '@/assets/images/home/msf-352b7dd1 1.png'
import iccoImage from '@/assets/images/home/icco-63c72f5a 1.png'
import UMIImage from '@/assets/images/home/UMI-d0da6a30 1.png'





const PartnerSection = () => {

    const partners = [
        {
            "name": "Lorem ipsum",
            "imageUrl": sosImage
        },
        {
            "name": "Lorem ipsum",
            "imageUrl": tmfImage
        },
        {
            "name": "Lorem ipsum",
            "imageUrl": msfImage
        },
        {
            "name": "Lorem ipsum",
            "imageUrl": iccoImage
        },
        {
            "name": "Lorem ipsum",
            "imageUrl": UMIImage
        },
        
    ]
  return (
    <div className="bg-slate-50 opacity-65 mt-[-200px] flex flex-col items-center justify-center w-10/12 mx-auto rounded-xl p-1">
        <div className="flex flex-col items-center justify-center mt-4 divide-slate-950 divide-y ">
        <div>
            <h2 className="text-3xl font-bold text-center mb-1">Nos partenaires</h2>
        </div>
        <Carousel opts={{align: "start",}} className="mt-1">
            <CarouselContent>
                {
                    partners.map((partner, index)=> (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center">
                                <div className="h-28 border rounded-full w-28 flex items-center justify-center bg-white">
                                    <img className="" src={partner.imageUrl} alt={partner.name}/>
                                </div>
                            <h4>{partner.name}</h4>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))
                }
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
    </div>
  )
}

export default PartnerSection
