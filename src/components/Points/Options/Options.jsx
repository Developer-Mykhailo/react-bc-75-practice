import css from "./Options.module.css";

const Options = ({ handleClick, points }) => {
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
    </ul>
  );
};

export default Options;
