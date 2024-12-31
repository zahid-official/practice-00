import CardProp from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Card = ({ card, handleQueue }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;

  return (
    <div>
      <div className="card bg-base-100 border-2">
        <div className="rounded-xl p-5">
          <img
            src={recipe_image}
            alt="recipe photo"
            className="h-64 w-full object-cover rounded-t-xl"
          />
        </div>

        <div className="p-5 space-y-4">
          <h2 className="text-2xl font-bold">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
          <hr />

          <h3 className="text-xl font-semibold">
            Ingredients: {ingredients.length}
          </h3>
          <ul className="ml-8">
            {" "}
            {ingredients.map((item, idx) => (
              <li key={idx} className="list-disc text-[#878787]">
                {item}
              </li>
            ))}
          </ul>
          <hr />

          <div className="flex gap-8">
            <div className="flex gap-1 items-center">
              <span className="text-2xl">{<CiClock2></CiClock2>}</span>
              <p>{preparing_time} Minutes</p>
            </div>

            <div className="flex gap-1 items-center">
              <span className="text-2xl">{<FaFire></FaFire>}</span>
              <p>{calories} Calories</p>
            </div>
          </div>

          <div className="py-5 ml-2">
            <button onClick={() => handleQueue(card)} className="btn bg-[#0BE58A] rounded-3xl">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: CardProp.object.isRequired,
  handleQueue: CardProp.func.isRequired,
};
export default Card;
