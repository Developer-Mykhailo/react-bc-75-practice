import Result from "../components/Points/Result/Result";
import Options from "../components/Points/Options/Options";
import Notification from "../components/Points/Notification/Notification.jsx.jsx";
import Description from "../components/Points/Description/Description.jsx";
import Heading from "../components/Heading/Heading.jsx";
import { useSelector } from "react-redux";

const Points = () => {
  const points = useSelector((state) => state.points);

  const totalPoints = Object.values(points).reduce(
    (acc, point) => acc + point,
    0
  );
  return (
    <div>
      <Description />
      <Options points={Object.keys(points)} totalPoints={totalPoints} />
      {totalPoints > 0 ? (
        <>
          <Heading title="The points you left!" bottom variant="info" />
          <Result
            points={[...Object.entries(points), ["Total points", totalPoints]]}
          />
        </>
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default Points;
