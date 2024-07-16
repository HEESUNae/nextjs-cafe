import React from 'react';
import styles from './modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>{children}</div>
    </div>
  );
};
