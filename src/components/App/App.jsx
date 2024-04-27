import css from "../App/App.module.css";
import { fetchImages } from "../../photos-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMassage/ErrorMassage";

const App = () => {
  const [imgs, setImgs] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [imgUrl, setImgsUrl] = useState([]);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        setLoading(true);
        setNotFoundError(false);

        const newImgs = await fetchImages(page, query);

        if (newImgs.length === 0) {
          setNotFoundError(true);
        }

        setImgs((prevImages) => [...prevImages, ...newImgs]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImgs([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (url) => {
    setImgsUrl(url);
    toggle();
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {imgs.length > 0 && <ImageGallery onImgClick={openModal} items={imgs} />}

      {error && <ErrorMessage />}
      {loading && <Loader />}
      {notFoundError && <p className={css.notFound}>Not found, try again!</p>}
      {imgs.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modal && (
        <ImageModal
          image={imgUrl}
          imgModal={modal}
          item={imgs}
          onModalClose={toggle}
        />
      )}
    </div>
  );
};

export default App;
