import s from "./CocktailInfo.module.css";
const CocktailInfo = ({
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strCategory,
  strInstructions,
  strGlass,
  dateModified,
}) => {
  return (
    <div className={s.card}>
      <div className={s["card-image"]}>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className={s["card-content"]}>
        <h2 className={s["card-title"]}>{strDrink}</h2>
        <div className={s["card-details"]}>
          <span>
            <strong>Type:</strong>{" "}
            <span className={s["accent"]}>{strAlcoholic}</span>
          </span>
          <span>
            <strong>Category:</strong>{" "}
            <span className={s["accent"]}>{strCategory}</span>
          </span>
        </div>
        <div className={s["card-instruction"]}>
          <strong>Instruction:</strong>
          <p>{strInstructions}</p>
        </div>
        <div className={s["card-footer"]}>
          <span>
            <strong>Preview:</strong>
            <span className={s["accent"]}>{strGlass}</span>
          </span>
          <span>
            <strong>Published:</strong>
            <span className={s["accent"]}>{dateModified}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CocktailInfo;
