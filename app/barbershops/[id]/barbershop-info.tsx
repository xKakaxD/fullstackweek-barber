'use client'
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
    barbershop: Barbershop
}


const BarberShopInfo = ({barbershop}: BarbershopInfoProps) => {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/');
    }
     
    return ( 
        <div>
            <div className="h-[250px] w-full relative">
            <Button size="icon" variant='outline' className="z-50 absolute top-4 left-4">
                <ChevronLeftIcon onClick={handleBackClick}/>
            </Button>

            <Button size="icon" variant='outline' className="z-50 absolute top-4 right-4">
                <MenuIcon/>
            </Button>

            <Image 
            src={barbershop.imageUrl} 
            alt={barbershop.name}
            fill 
            className="opacity-85"
            style={{objectFit:"cover"}} 
            />

            </div>

            <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <MapPin size="18" className="text-primary"/>
                    <p className="text-xm">{barbershop.address}</p>
                </div>

                <div className="flex items-center gap-1 mt-2">
                    <StarIcon size="18" className="fill-primary text-primary"/>
                    <p className="text-xm">5.0 (499 Avaliações)</p>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-5 mb-5 px-3">
                <Button >Serviços</Button>
                <Button variant="secondary">Informações</Button>
            </div>

        </div>
     );
}
 
export default BarberShopInfo;