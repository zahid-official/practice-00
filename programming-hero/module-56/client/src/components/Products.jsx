import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";

const Products = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data);
    return (
        <div className="grid lg:grid-cols-2 gap-10 container mx-auto px-6 pb-32">
            {coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)}
        </div>
    );
};

export default Products;