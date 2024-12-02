import icon1 from "/assets/05.icon.png";
import icon2 from "/assets/06.icon.png";
import icon3 from "/assets/07.icon.png";
import icon4 from "/assets/08.icon.png";

const Motto = () => {
  return (
    <div className=" bg-[#eceae3] py-14 px-6">
      <div className="container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-10 ">
        {/* motto-01 */}
        <div className="space-y-2.5 sm:text-left text-center">
          <div className="flex sm:justify-start justify-center">
            <img src={icon1} alt="icon" />
          </div>
          <h2 className="text-4xl rancho">Awesome Aroma</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        {/* motto-02 */}
        <div className="space-y-2.5 sm:text-left text-center">
          <div className="flex sm:justify-start justify-center">
            <img src={icon2} alt="icon" />
          </div>
          <h2 className="text-4xl rancho">High Quality</h2>
          <p>
          We served the coffee to you maintaining the best quality
          </p>
        </div>

        {/* motto-03 */}
        <div className="space-y-2.5 sm:text-left text-center">
          <div className="flex sm:justify-start justify-center">
            <img src={icon3} alt="icon" />
          </div>
          <h2 className="text-4xl rancho">Pure Grades</h2>
          <p>
          The coffee is made of the green coffee beans which you will love
          </p>
        </div>

        {/* motto-04 */}
        <div className="space-y-2.5 sm:text-left text-center">
          <div className="flex sm:justify-start justify-center">
            <img src={icon4} alt="icon" />
          </div>
          <h2 className="text-4xl rancho">Proper Roasting</h2>
          <p>
          Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Motto;
