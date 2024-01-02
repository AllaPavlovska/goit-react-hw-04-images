import React, { useEffect, useCallback } from 'react';
import css from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  const handleKeyPress = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;



