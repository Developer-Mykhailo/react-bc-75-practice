import { Link, useLocation } from "react-router-dom";
import Grid from "../../Grid/Grid";
import GridItem from "../../GridItem/GridItem";

const CocktailsList = ({ cocktails }) => {
  const location = useLocation();
  return (
    <Grid>
      {cocktails.map((cocktail) => (
        <GridItem key={cocktail.idDrink}>
          <Link state={location} to={`/cocktails/${cocktail.idDrink}`}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
            <p>{cocktail.strGlass}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CocktailsList;
