'use strict';
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarberShopInfo from "./_components/barbershop-info";



interface BarbershopDetailsPageProps {
    params: {
        id?: string
    }
}
const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {
    if(!params.id) {
        // TODO: Redirecionar para home page
        return null;
    }
const barbershop = await db.barbershop.findUnique({
     where: {
         id: params.id
        }
    });
    if(!barbershop) {
        // TODO: Redirecionar para home page
        return null;
    }

    return ( 
        <BarberShopInfo barbershop={barbershop}/>
        
     );
}
 
export default BarbershopDetailsPage;