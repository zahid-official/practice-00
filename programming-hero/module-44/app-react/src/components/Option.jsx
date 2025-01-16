import PropValidation from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Option = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-300 px-8 py-16 rounded-xl gap-12 flex flex-col">
      <div className="flex-1">
        <p className="text-xl font-semibold text-center">
          <span className="text-6xl font-bold">{price}</span>/mon
          <h4 className="text-2xl">{name}</h4>
        </p>

        <div className="mt-10">
          {features.map((feature) => (
            <p className="font-semibold flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              {feature}
            </p>
          ))}
        </div>
      </div>

      <div>
        <button className="btn btn-success w-full text-white">Get a Plan</button>
      </div>
    </div>
  );
};

Option.propTypes = {
  option: PropValidation.object,
};
export default Option;
