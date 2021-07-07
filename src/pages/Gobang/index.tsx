import { createElement } from 'rax';
import View from 'rax-view';
import Board from '@/components/Board';
import styles from './index.module.css';

function Gobang() {
  return (
    <View>
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          {/* <ol>{moves}</ol> */}
        </div>
      </div>
    </View>
  );
}

export default Gobang;
