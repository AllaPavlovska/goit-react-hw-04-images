import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => { 
        return (
          <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

// import { ImageGalleryItem } from './ImageGalleryItem';

// export const ImageGallery = ({ images, onModal }) => {
//   return (
//     <ul className="ImageGallery">
//       {images.map(image => {
//         return (
//           <ImageGalleryItem key={image.id} image={image} onModal={onModal} />
//         );
//       })}
//     </ul>
//   );
// };
