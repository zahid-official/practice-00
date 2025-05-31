/* eslint-disable react/prop-types */
import shape06 from "/assets/shape-06.svg";
import shape07 from "/assets/shape-07.png";

const PageTitle = ({ pageTitle, text }) => {
  return (
    <div className="font-bold relative custom-gradient text-white text-center py-28 space-y-2 px-2">
      <div className="absolute -bottom-[116px] left-28 z-10 animate__animated animate__flash  animate__infinite	infinite my-element">
        <img src={shape06} alt="" />
      </div>

      <div className="absolute -bottom-0 right-36 z-10 animate__animated animate__shakeX  animate__infinite	infinite my-element2">
        <img src={shape07} alt="" />
      </div>

      <h2 className="sm:text-5xl text-4xl">
        {pageTitle}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default PageTitle;
