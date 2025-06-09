import axios from "axios";

const urls = Array.from(
  { length: 12 },
  () => "https://www.thecocktaildb.com/api/json/v1/1/random.php"
);

export const getRandomCocktails = async () => {
  const promises = urls.map(async (url) => {
    const { data } = await axios.get(url);
    return data;
  });
  const data = await Promise.all(promises);
  return data.map(({ drinks }) => {
    const { idDrink, strDrink, strDrinkThumb, strGlass } = drinks[0];
    return { idDrink, strDrink, strDrinkThumb, strGlass };
  });
};

export const getCocktailDetails = async (cocktailId) => {
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  );
  const {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
  } = data.drinks[0];
  return {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
  };
};
