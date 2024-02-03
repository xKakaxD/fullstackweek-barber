import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./badge";
import { Card, CardContent } from "./ui/card";
import { AvatarImage } from "./ui/avatar";

const BookingItem = () => {
    return ( 
        <Card>
             <CardContent className="flex justify-between p-5 py-0">
                <div className="flex flex-col gap-2 py-5">
                      <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit ">Confirmado</Badge>
                      <h2 className=" font-bold">Corte de Cabelo</h2>   
                      
                      <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://utfs.io/f/a55f0f39-31a0-4819-8796-538d68cc2a0f-17o.png" alt="Avatar" />

                        <AvatarFallback>A</AvatarFallback>
                        </Avatar>

                        <h3 className=" p-3">Barbearia do Renner</h3>
                      </div>
                </div>
                
                <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
                   <p className="text-sm">Fevereiro</p>
                   <p className="text-2xl">06</p>
                   <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BookingItem;