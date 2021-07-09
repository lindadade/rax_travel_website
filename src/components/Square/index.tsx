import { createElement } from 'rax';
import styles from './index.module.css';

function Square(props: { value: number, onClick: () => void; }) {
  return (
    <button className={styles.square} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
