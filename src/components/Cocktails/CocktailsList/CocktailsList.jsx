import { Link } from "react-router-dom";
import Grid from "../../Grid/Grid";
import GridItem from "../../GridItem/GridItem";

const CocktailsList = ({ cocktails }) => {
  return (
    <Grid>
      {cocktails.map((cocktail) => (
        <GridItem key={cocktail.idDrink}>
          <Link to={`/cocktails/${cocktail.idDrink}`}>
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
