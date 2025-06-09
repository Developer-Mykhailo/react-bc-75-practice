import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Heading from "../components/Heading/Heading";
import Loader from "../components/Loader/Loader";
import { getCocktailDetails } from "../service/thecocktaildbAPI";
import CocktailInfo from "../components/Cocktails/CocktailInfo/CocktailInfo";

const CocktailDetails = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
  console.log(cocktail);
  return (
    <>
      <Section>
        <Container>
          {cocktail && <CocktailInfo {...cocktail} />}
          {loading && <Loader />}
          {error && (
            <Heading
              variant={"error"}
              title={`Something went wrong ! ${error}.Please try again later`}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default CocktailDetails;
