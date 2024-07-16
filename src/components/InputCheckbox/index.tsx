import React from 'react';
import styles from './inputCheckbox.module.scss';

interface InputCheckboxProps {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}

export default function InputCheckbox({ children, checked, onChange }: InputCheckboxProps) {
  return (
    <label className={styles.label}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={checked ? styles.active : ''}>{children}</div>
    </label>
  );
}
