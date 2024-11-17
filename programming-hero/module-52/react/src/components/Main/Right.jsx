import Ads from "./Ads";
import FindUs from "./FindUs";
import QZone from "./QZone";
import Social from "./Social";

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
