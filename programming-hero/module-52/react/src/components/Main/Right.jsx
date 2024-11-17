import Ads from "./Right/Ads";
import FindUs from "./Right/FindUs";
import QZone from "./Right/QZone";
import Social from "./Right/Social";

const Right = () => {
  return (
    <div className="space-y-6">
      <Social></Social>
      <FindUs></FindUs>
      <QZone></QZone>
      <Ads></Ads>
    </div>
  );
};

export default Right;
