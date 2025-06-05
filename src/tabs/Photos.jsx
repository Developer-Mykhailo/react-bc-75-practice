import { useEffect, useState } from "react";
import { getPhotos } from "../service/pexelsAPI";
import SearchForm from "../components/Photos/SearchForm/SearchForm";
import PhotosList from "../components/Photos/PhotosList/PhotosList";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import LoadMoreBtn from "../components/Photos/LoadMoreBtn/LoadMoreBtn";

const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const { photos } = await getPhotos(query, page);
        setImages((prev) => [...prev, ...photos]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query, page]);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleFormSubmit} />
        {images.length > 0 && <PhotosList imagesList={images} />}
        <LoadMoreBtn onClick={handleLoadMore} />
      </Container>
    </Section>
  );
};

export default Photos;
