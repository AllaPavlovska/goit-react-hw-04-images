import React from 'react';
import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div>
    <Audio className ={css.Loader}
      height="80"
      width="100"
      radius="20"
      color="blue"
      ariaLabel="loading"
    />
  </div>
);

export default Loader;