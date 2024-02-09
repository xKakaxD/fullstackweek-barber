'use client';

import { Badge } from "@/app/_components/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    const router = useRouter();

    const HandleBookingClick = () => {
        router.push(`/barbershops/${barbershop.id}`);
        
    }

    return ( 
        <Card className=" min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="py-0 px-1">
            <div className="h-[159px] w-full relative">
                <div className="absolute top-2 left-2 z-50">
                <Badge variant="secondary" className=" opacity-90 flex gap-1 items-center">
                    <StarIcon size={12} className="fill-primary text-primary"></StarIcon>
                    <span className="span-xs">5,0</span>
                </Badge>
                </div>
            <Image 
            alt={barbershop.name} 
            src={barbershop.imageUrl} 
            style={{objectFit:"cover"}}
            fill 
            className="rounded-2xl"
            />
            </div>

            <div className="px-2 pb-3">
            <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
            <p className="text-xs text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
            <Button variant="secondary" onClick={HandleBookingClick} className=" w-full mt-3">Reservar</Button> 
            </div>

            </CardContent>
        </Card>
     );
}

 
export default BarbershopItem;
