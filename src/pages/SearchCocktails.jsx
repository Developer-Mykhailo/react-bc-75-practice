import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Section from "../components/Section/Section";
import SearchForm from "../components/Photos/SearchForm/SearchForm";
import Container from "../components/Container/Container";
import { getCocktailsByQuery } from "../service/thecocktaildbAPI";
import Heading from "../components/Heading/Heading";
import CocktailsList from "../components/Cocktails/CocktailsList/CocktailsList";
import Loader from "../components/Loader/Loader";

const SearchCocktails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const query = searchParams.get("query");

  const [value] = useDebounce(query, 300);

  useEffect(() => {
    if (!value) return;

    const getCocktails = async () => {
      setLoading(true);
      setIsEmpty(false);
      try {
        const data = await getCocktailsByQuery(value);
        if (!data.length) {
          setIsEmpty(true);
          return;
        }
        setCocktails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCocktails();
  }, [value]);

  // const handleFormSubmit = (query) => {
  //   setSearchParams({ query });
  //   setIsEmpty(false);
  // };
  return (
    <Section>
      <Container>
        {/* <SearchForm onSubmit={handleFormSubmit} /> */}
        <input
          defaultValue={value}
          onChange={(e) => {
            setSearchParams({ query: e.target.value });
          }}
        />
        {isEmpty && <Heading variant={"info"} title={"Sorry!Not found"} />}
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
  );
};

export default SearchCocktails;
