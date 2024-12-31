import { useEffect, useState } from "react";
import Card from "./Card";
import RecipesProp from "prop-types";

const Recipes = ({handleQueue}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="lg:w-2/3 grid gap-8 md:grid-cols-2">
            {recipes.map((item, idx) => <Card key={idx} card={item} handleQueue={handleQueue}></Card>)}
        </div>
    );
};

Recipes.propTypes = {
    handleQueue: RecipesProp.func.isRequired,
  };
export default Recipes;