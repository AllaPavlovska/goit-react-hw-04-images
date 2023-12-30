import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleOverlayClick);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleOverlayClick);
    };
  }, [onClose]);

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;


