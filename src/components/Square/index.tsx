import { createElement } from 'rax';
import styles from './index.module.css';

function Square(props: { value: number, winner?: boolean, onClick: () => void; }) {
  return (
    <button className={`${props.winner ? 'winner' : ''} ${styles.square}`} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
