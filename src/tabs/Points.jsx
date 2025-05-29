import { useState } from "react";
import Result from "../components/Points/Result/Result";
import Options from "../components/Points/Options/Options";
import Notification from "../components/Points/Notification/Notification.jsx.jsx";
import Description from "../components/Points/Description/Description.jsx";

const Points = () => {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });

  const handleClick = (point, value) => {
    setPoints({ ...points, [point]: points[point] + value });
  };

  const totalPoints = Object.values(points).reduce(
    (acc, point) => acc + point,
    0
  );
  return (
    <div>
      <Description />
      <Options handleClick={handleClick} points={Object.keys(points)} />
      {totalPoints > 0 ? (
        <Result
          points={[...Object.entries(points), ["Total points", totalPoints]]}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default Points;
