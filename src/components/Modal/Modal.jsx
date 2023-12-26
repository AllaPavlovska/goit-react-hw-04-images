import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    const { onClose } = this.props;
    if (e.code === 'Escape') {
      onClose();
    }
  };

  handleOverlayClick = (e) => {
    const { onClose } = this.props;
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
