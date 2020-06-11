import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import styles from 'styled-components';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onModalClose();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }

    this.props.onModalClose();
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <ModalStyle
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </ModalStyle>,
      MODAL_ROOT,
    );
  }
}

const ModalStyle = styles.div`

`;
