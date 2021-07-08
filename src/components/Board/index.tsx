import { createElement } from 'rax';
import View from 'rax-view';
import Square from '../Square';
import styles from './index.module.css';

function Board() {
  const renderSquare = () => {
    return <Square />;
  };
  return (
    <View>
      <div className={styles.boardRow}>
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className={styles.boardRow}>
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className={styles.boardRow}>
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </View>
  );
}

export default Board;
