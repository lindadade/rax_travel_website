import { createElement, useState } from 'rax';
import View from 'rax-view';
import Board from '@/components/Board';
import styles from './index.module.css';
import { calculateWinner } from '@/utils';
import { history as router } from 'rax-app';

function Gobang() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [sort, setSort] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i: string | number) => {
    const curHistory = history.slice(0, stepNumber + 1);
    const current = curHistory[curHistory.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares)?.winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    const historyTemp = [...curHistory, { squares }];
    setHistory(historyTemp);
    setXIsNext(!xIsNext);
    setStepNumber(curHistory.length);
  };

  // 历史跳转
  const jumpTo = (step: number) => {
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

  sort && moves.reverse();

  // 当前棋盘
  const current = history[stepNumber];
  const calculate = calculateWinner(current.squares);
  const winner = calculate?.winner;
  let winSquare: number[] | undefined;
  let status: {} | null | undefined;

  if (winner) {
    status = `Winner: ${winner}`;
    winSquare = calculate?.square;
  } else if (moves.length === 10) {
    status = 'Draw, start over game';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <View>
      <div c>
        <div
          style={{ textAlign: 'center' }}
          className="button buttonPrimary buttonBig buttonNoRound"
          onClick={() => router.push('/')}
        >
          返回旅游页面
        </div>
        <div className={styles.game}>
          <div className={styles.gameBoard}>
            <Board squares={current.squares} winner={winSquare} onClick={(i) => handleClick(i)} />
          </div>
          <div className={styles.gameInfo}>
            <div
              style={{ textAlign: 'center', width: '100px' }}
              className="button buttonPrimary buttonNoBig buttonRound"
              onClick={() => setSort(!sort)}
            >
              排序
            </div>
            <div className={styles.status}>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    </View>
  );
}

export default Gobang;
