import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCocktailIngridients } from "../../service/thecocktaildbAPI";
import Heading from "../Heading/Heading";
import Loader from "../Loader/Loader";

const CocktailIngridients = () => {
  const { cocktailId } = useParams();
  const [ingridients, setIngridients] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCocktail = async () => {
      setLoading(true);
      try {
        const data = await getCocktailIngridients(cocktailId);
        console.log(data);
        setIngridients(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCocktail();
  }, [cocktailId]);

  return (
    <div>
      {ingridients?.length ? (
        <ul>
          {ingridients.map((ingredient) => (
            <li key={ingredient.idIngredient}>{ingredient.strIngredient}</li>
          ))}
        </ul>
      ) : (
        <Heading
          variant={"error"}
          title={`We not found ingredients! Please try again later`}
        />
      )}
      {loading && <Loader />}
      {error && (
        <Heading
          variant={"error"}
          title={`Something went wrong ! ${error}.Please try again later`}
        />
      )}
    </div>
  );
};

export default CocktailIngridients;
