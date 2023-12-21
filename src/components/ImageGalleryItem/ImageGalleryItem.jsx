import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li
    className={css.imageGalleryItem}
    onClick={() => onClick(image.largeImageURL)}
  >
    <img
      src={image.webformatURL}
      alt={image.tags}
      className={css.galleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;
