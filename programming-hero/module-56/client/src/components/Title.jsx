/* eslint-disable react/prop-types */
import icon from "/assets/09.icon.png";

const Title = ({subheading, heading, style}) => {
    return (
        <div className="text-center mt-28 mb-14 text-[#331A15]">
            <h6>{subheading}</h6>
            <h2 className="rancho sm:text-5xl text-4xl font-semibold mb-4">{heading}</h2>
            <span className={`${style} px-5 py-1.5 border border-[#331a15] rounded items-center gap-2 rancho text-xl bg-[#E3B577] text-white`}>Add Coffee <img src={icon} alt="" /></span>
        </div>
    );
};

export default Title;