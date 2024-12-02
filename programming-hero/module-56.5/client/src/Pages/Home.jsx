import Banner from "../components/Banner";
import Motto from "../components/Motto";
import Products from "../components/Products";
import Title from "../components/Title";
import bg from "/assets/10.bg.png";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Motto></Motto>

      <section className={`bg-[url(${bg})]`}>
        <Title
          subheading={"--- Sip & Savor ---"}
          heading={"Our Popular Products"}
          style={"inline-flex"}
        ></Title>
        
        <Products></Products>
      </section>
    </div>
  );
};

export default Home;
