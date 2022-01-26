import { useContext, useEffect } from 'react';
import Card from "./Card";
import { StateContext } from './Context';
import Pagination from './Pagination';

function CardWrapper() {
    const { animalList } = useContext(StateContext);

    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
                animalList.map(animal =>
                    <Card animal={animal}></Card>
                )
            }
            </div>
        </div>
        <Pagination></Pagination>
        
        </section>
    ) 
    
}

export default CardWrapper;