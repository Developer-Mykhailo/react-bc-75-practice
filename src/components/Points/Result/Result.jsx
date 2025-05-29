import css from "./Result.module.css";

const Result = ({ points }) => {
  return (
    <ul className={css.list}>
      {points.map(([key, value]) => (
        <li className={css.item} key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};

export default Result;
