/* eslint-disable react/prop-types */


const Title = ({section, heading1, heading2}) => {
    return (
        <div className="pt-32 pb-10 mx-3 text-center space-y-3">
            <h4 className="font-bold text-[#0683a2] text-lg">{section}</h4>
            <h2 className="sm:text-5xl text-3xl font-bold"> {heading1} <br className="lg:block hidden" /> {heading2}</h2>
        </div>
    );
};

export default Title;