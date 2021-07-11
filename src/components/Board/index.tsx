import { createElement } from 'rax';
import View from 'rax-view';
import Square from '../Square';
import styles from './index.module.css';

function Board(props: { squares: { [x: string]: any }; onClick: (arg0: any) => any }) {
  const renderSquare = (i: number) => {
    return <Square key={i} value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <View>
      {[0, 1, 2].map((v) => {
        return (
          <div key={v} className={styles.boardRow}>
            {[NaN, NaN, NaN].map((v2, i) => {
              return (renderSquare(v * 3 + i));
            })};
          </div>
        );
      })}
    </View>
  );
}

export default Board;
