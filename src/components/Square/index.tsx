import { createElement, useState } from 'rax';
import styles from './index.module.css';

function Square() {
  const [value, setValue] = useState('');
  return (
    <button className={styles.square} onClick={() => setValue('X')}>
      {value}
    </button>
  );
}

export default Square;
