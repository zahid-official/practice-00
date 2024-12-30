import { add, testAliasToDivition as divide} from "./Calculator";

const Sunglass = () => {
    const first = 10;
    const second = 2;
    return (
        <div>
            <h2>Calculate : {add(first, second)} + {divide(first, second)} </h2>
        </div>
    );
};

export default Sunglass;