import { useDispatch } from "react-redux";
import css from "./Options.module.css";
import { resetPoints, setPoints } from "../../../redux/pointsSlice";

const Options = ({ points, totalPoints }) => {
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {points.map((key, index) => (
        <li key={key}>
          <button
            className={css.button}
            onClick={() => dispatch(setPoints({ key, value: index + 1 }))}
          >
            {key}
          </button>
        </li>
      ))}
      {totalPoints > 0 && (
        <li>
          <button
            onClick={() => dispatch(resetPoints())}
            className={css.resetButton}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
