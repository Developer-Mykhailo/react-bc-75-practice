import Result from "../components/Points/Result/Result";
import Options from "../components/Points/Options/Options";
import Notification from "../components/Points/Notification/Notification.jsx.jsx";
import Description from "../components/Points/Description/Description.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import Heading from "../components/Heading/Heading.jsx";
const innitialState = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
};
const Points = () => {
  const [points, setPoints] = useLocalStorage("points", innitialState);

  const handleClick = (point, value) => {
    setPoints({ ...points, [point]: points[point] + value });
  };
  const resetPoints = () => {
    setPoints(innitialState);
  };

  const totalPoints = Object.values(points).reduce(
    (acc, point) => acc + point,
    0
  );
  return (
    <div>
      <Description />
      <Options
        handleClick={handleClick}
        points={Object.keys(points)}
        totalPoints={totalPoints}
        resetPoints={resetPoints}
      />
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
