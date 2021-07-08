import { createElement, useState } from 'rax';
import View from 'rax-view';
import Square from '../Square';
import styles from './index.module.css';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const status = 'Next player: X';

  const handleClick = (i) => {
    const square = [...squares];
    square[i] = 'X';
    setSquares(square);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <View>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </View>
  );
}

export default Board;
