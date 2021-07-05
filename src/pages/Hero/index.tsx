import { createElement } from 'rax';
import { history } from 'rax-app';
import View from 'rax-view';
import styles from './index.module.css';

function Hero() {
  return (
    // 主页巨幕
    <View id="hero">
      <div className={styles.HeroContainer}>
        {/* 背景视频 */}
        <div className={styles.HeroBg}>
          <video src="https://mp4.vjshi.com/2020-11-19/34b1f460a8a9fcc283c4edc8fe43b32f.mp4" type="video/mp4" autoPlay loop muted playsInline className={styles.VideoBg} />
        </div>

        {/* 内容 */}
        <div className={styles.HeroContent}>
          <div className={styles.HeroItems}>
            <h1 className={styles.HeroH1}>前往梦想的道路上</h1>
            <p className={styles.HeroP}>Out of this world!</p>
            <span onClick={() => history.push('/trips')} className="button buttonPrimary buttonBig buttonNoRound">开始旅行</span>
          </div>
        </div>
      </div>
    </View>
  );
}

export default Hero;
