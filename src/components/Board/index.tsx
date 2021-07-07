import { createElement } from 'rax';
import View from 'rax-view';
import Square from '../Square';
import styles from './index.module.css';

function Board() {
  const renderSquare = (i) => {
    return <Square value={i} />;
  };
  return (
    <View>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </View>
  );
}

export default Board;
