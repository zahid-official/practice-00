
import './Watch.css'

const Watch = ({watch}) => {
    const {brand, model, price, features} = watch;
    console.log(watch);
    
    
    return (
        <div className="style">
            <h2>{brand}</h2>
            <h4>{model}</h4>
            <p>{features}</p>
            <small>{price}$</small>
        </div>
    );
};

export default Watch;