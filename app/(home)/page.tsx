import{format} from 'date-fns';
import  Header from "../_components/ui/header";
import { ptBR } from 'date-fns/locale';

export default function Home (){
    return (
        <div>
            <Header/>

            <div className='px-5 py-5 flex-row'>
                <h2 className='text-xl font-bold'>Olá, Kaká</h2>
                <p className = "capitalize text-sm">
                    {format(new Date(), "EEEE,' 'dd' de 'LLLL", {
                     locale: ptBR,
                    })}
                </p>
            </div>
        </div>

    );
}