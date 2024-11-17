import swimming from "/assets/swimming.png";
import classroom from "/assets/class.png";
import playground from "/assets/playground.png";

const QZone = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold"> Q-Zone</h1>
      <div className="space-y-8">
        <div className="border-2 border-dashed p-4">
          <img className="w-full" src={swimming} alt="" />
        </div>

        <div className="border-2 border-dashed p-4">
          <img className="w-full" src={classroom} alt="" />
        </div>
        <div className="border-2 border-dashed p-4">
          <img className="w-full" src={playground} alt="" />
        </div>
      </div>
    </>
  );
};

export default QZone;
