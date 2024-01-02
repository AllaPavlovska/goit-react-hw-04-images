import React, { useState, useEffect } from 'react';
import { fetchImages } from '../Api/Api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    if (query.length === 0) {
      return;
    }

    setIsLoading(true);

    fetchImages(query, page)
      .then((response) => {
        if (response.data.hits.length === 0) {
          setShowLoadMore(false);
          return;
        }

        const { hits, totalHits } = response.data;

        setImages((prevImages) => [...prevImages, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12));
      })
      .catch((error) => console.error('Error fetching images:', error))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setShowLoadMore(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (newLargeImageURL) => {
    setShowModal(true);
    setLargeImageURL(newLargeImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      {query.length > 0 && images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {showLoadMore && images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMore} />
      )}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
