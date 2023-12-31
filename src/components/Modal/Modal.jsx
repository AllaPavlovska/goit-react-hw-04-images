import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
 

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
     const handleKeyPress = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };


    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;

