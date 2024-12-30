import "./Cats.css";

const Cats = ({ cat, handleCart }) => {
  const { name, img, price, description } = cat;
  return (
    <div className="cats">
      <div>
        <img src={img} alt="cat-image" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={()=> handleCart(cat)}>Add Cart</button>
    </div>
  );
};

export default Cats;
