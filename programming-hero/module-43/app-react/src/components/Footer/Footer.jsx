import Footerbg from "../../assets/footer-logo.png";
const Footer = () => {
  return (
    <div>
      {/* footer */}
      <footer className="bg-[#06091a] text-white sm:p-10 px-4 py-8 lg:pt-60 relative">
        {/* subscribe */}
        <div className="space-y-3 lg:w-[60%] py-20 bg-gradient-to-bl from-[#e0f4fa] to-[#fdf0d2] rounded-2xl flex flex-col justify-center text-center items-center lg:absolute -top-[25%] left-[25%] mb-10">
          <h2 className="text-3xl text-black">Subscribe to our Newsletter</h2>
          <p className="text-black">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="sm:join">
            <input
              className="input input-bordered join-item mb-2"
              placeholder="Email"
            />
            <button className="btn border-none join-item bg-gradient-to-br from-[#c76eaa] to-[#e3be58]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="lg:flex justify-center">
          <img src={Footerbg} alt="footer-logo" />
        </div>

        <div className="lg:flex justify-around items-center">
          <div className="mt-10 space-y-3">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="w-64 text-sm">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <nav>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </nav>

          <div className="mt-10 space-y-3">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <p className="w-64 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="sm:join">
              <input
                className="input input-bordered join-item mb-2"
                placeholder="Email"
              />
              <button className="btn border-none join-item bg-gradient-to-br from-[#c76eaa] to-[#e3be58]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <div className="py-8 text-center text-white border-t bg-[#06091a]">
        @2024 CPL Company All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
