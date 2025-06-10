import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading/Heading";
import Loader from "../../components/Loader/Loader";
import { getCocktailDetails } from "../../service/thecocktaildbAPI";
import CocktailInfo from "../../components/Cocktails/CocktailInfo/CocktailInfo";

import css from "./CocktailDetails.module.css";

const CocktailDetails = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const goBackLink = useRef(location.state || "/cocktails");

  useEffect(() => {
    const getCocktail = async () => {
      setLoading(true);
      try {
        const data = await getCocktailDetails(cocktailId);
        setCocktail(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCocktail();
  }, [cocktailId]);
  return (
    <>
      <Section>
        <Container>
          <Link to={goBackLink.current} className={css.link}>
            Go Back
          </Link>
          {cocktail && <CocktailInfo {...cocktail} />}
          {loading && <Loader />}
          {error && (
            <Heading
              variant={"error"}
              title={`Something went wrong ! ${error}.Please try again later`}
            />
          )}
          <Link to={"ingridients"} className={css.link}>
            Ingridients
          </Link>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};

export default CocktailDetails;
