import { createElement, useState } from 'rax';
import View from 'rax-view';
import Board from '@/components/Board';
import styles from './index.module.css';
import { calculateWinner } from '@/utils';

function Gobang() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  // 当前棋盘
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  let status: {} | null | undefined;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i: string | number) => {
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    const historyTemp = [...history, { squares }];
    setHistory(historyTemp);
    setXIsNext(!xIsNext);
  };

  return (
    <View>
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className={styles.gameInfo}>
          <div className={styles.status}>{status}</div>
          {/* <ol>{moves}</ol> */}
        </div>
      </div>
    </View>
  );
}

export default Gobang;
