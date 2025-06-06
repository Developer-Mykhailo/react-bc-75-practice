import { useEffect, useState } from "react";
import { getPhotos } from "../service/pexelsAPI";
import SearchForm from "../components/Photos/SearchForm/SearchForm";
import PhotosList from "../components/Photos/PhotosList/PhotosList";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import LoadMoreBtn from "../components/Photos/LoadMoreBtn/LoadMoreBtn";
import Heading from "../components/Heading/Heading";
import Loader from "../components/Loader/Loader";
import PhotosSkeleton from "../components/Photos/PhotosSkeleton/PhotosSkeleton";
import ImageModal from "../components/Photos/ImageModal/ImageModal";

const Photos = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [hasMorePhotos, setHasMorePhotos] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page
        );
        if (total_results === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...photos]);
        setHasMorePhotos(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setHasMorePhotos(false);
    setError("");
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const handleOpenModal = (image) => {
    setModalImage(image);

    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleFormSubmit} />
        {images.length > 0 && (
          <PhotosList imagesList={images} openModal={handleOpenModal} />
        )}
        {isLoading && <PhotosSkeleton />}
        {hasMorePhotos && <LoadMoreBtn onClick={handleLoadMore} />}
        {isEmpty && <Heading variant={"info"} title={"Sorry!Not found"} />}
        {error && (
          <Heading
            variant={"error"}
            title={`Something went wrong ! ${error}.Please try again later`}
          />
        )}

        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={handleCloseModal}
          src={modalImage.src}
          alt={modalImage.alt}
        />
      </Container>
    </Section>
  );
};

export default Photos;
