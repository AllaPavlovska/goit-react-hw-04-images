import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick }) => (
  <div className={css.container}> <button type="button" className={css.loadMoreButton} onClick={onClick}>
    Load more
  </button></div>
 
);

export default Button;
