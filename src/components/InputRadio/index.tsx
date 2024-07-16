import React from 'react';
import styles from './inputRadio.module.scss';

interface InputRadioProps {
  checked: boolean;
  title: string;
  onChange: () => void;
}

export default function InputRadio({ checked, title, onChange }: InputRadioProps) {
  return (
    <label className={styles.label}>
      <input type="radio" checked={checked} onChange={onChange} />
      <div className={checked ? styles.active : ''}>{title}</div>
    </label>
  );
}
