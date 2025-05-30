import css from "./Options.module.css";

const Options = ({ handleClick, points, totalPoints, resetPoints }) => {
  return (
    <ul className={css.list}>
      {points.map((key, index) => (
        <li key={key}>
          <button
            className={css.button}
            onClick={() => handleClick(key, index + 1)}
          >
            {key}
          </button>
        </li>
      ))}
      {totalPoints > 0 && (
        <li>
          <button onClick={resetPoints} className={css.resetButton}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
