import React from 'react';
import styles from './ColorSwatch.module.css';

export default function ColorSwatch({ color }) {
  // Only process if it's a hex color starting with #
  if (!color || !color.startsWith('#')) {
    return <code>{color}</code>;
  }

  return (
    <p className={styles.colorSwatchContainer}>
      <span className={styles.colorSwatch} style={{ backgroundColor: color }} />
      <code className={styles.colorValue}>{color}</code>
    </p>
  );
}
