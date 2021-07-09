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
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i: string | number) => {
    const curHistory = history.slice(0, stepNumber + 1);
    const current = curHistory[curHistory.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    const historyTemp = [...curHistory, { squares }];
    setHistory(historyTemp);
    setXIsNext(!xIsNext);
    setStepNumber(curHistory.length);
  };

  // 历史跳转
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  // 历史记录
  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    const key = `move${move}`;
    return (
      <li key={key}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  // 当前棋盘
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status: {} | null | undefined;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (moves.length === 10) {
    status = 'Draw, start over game';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <View>
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className={styles.gameInfo}>
          <div className={styles.status}>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </View>
  );
}

export default Gobang;
