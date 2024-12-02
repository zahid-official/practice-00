import logo from "/assets/01.logo.png";

const Navbar = () => {
  return (
    <div className={`flex items-center justify-center gap-1 py-6 bg-[url(/assets/02.bg.jpg)] bg-center`}>
      <div>
        <img src={logo} alt="logo" className="sm:h-20 h-16" />
      </div>
      <h1 className="sm:text-5xl text-4xl font-semibold rancho text-white"> Espresso Emporium</h1>
    </div>
  );
};

export default Navbar;
