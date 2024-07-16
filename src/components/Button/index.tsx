import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  style?: string;
  title: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({ style = 'primaryMainBtn', type = 'button', title, onClick }: ButtonProps) {
  return (
    <button type={type} className={styles[style]} onClick={onClick}>
      {title}
    </button>
  );
}
