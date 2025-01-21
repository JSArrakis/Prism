import React, { FC, CSSProperties } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
}

const Modal: FC<ModalProps> = function Modal({ isOpen, children, style }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} style={style}>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  style: {},
};

export default Modal;
