import { useEffect, useState } from "react";
import { getRandomCocktails } from "../service/thecocktaildbAPI";
import CocktailsList from "../components/Cocktails/CocktailsList/CocktailsList";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import Loader from "../components/Loader/Loader";
import Heading from "../components/Heading/Heading";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCocktails = async () => {
      setLoading(true);
      try {
        const data = await getRandomCocktails();
        setCocktails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCocktails();
  }, []);

  return (
    <>
      <Section>
        <Container>
          <CocktailsList cocktails={cocktails} />
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

export default Cocktails;
