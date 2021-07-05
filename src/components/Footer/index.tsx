import { createElement } from 'rax';
import View from 'rax-view';
import styles from './index.module.css';

function Footer() {
  return (
    // 底部栏
    <View id="contact">
      <div className={styles.footerContainer}>
        {/* 第一栏 */}
        <div className={styles.footerLinkWrapper}>
          {/* 标签 */}
          <div className={styles.footerDesc}>
            <h1>Expel</h1>
            <p>We strive to create the best experiences for our customers</p>
          </div>
          <div className={styles.footerLinkItems}>
            <h2 className={styles.footerLinkTitle}>联系我们</h2>
            <div className={styles.footerLink}>
              Contact
            </div>
            <div className={styles.footerLink}>
              Support
            </div>
            <div className={styles.footerLink}>
              Destinations
            </div>
            <div className={styles.footerLink}>
              Sponsorships
            </div>
          </div>
        </div>
        {/* 第二栏 */}
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <h2 className={styles.footerLinkTitle}>音频</h2>
            <div className={styles.footerLink}>
              Submit Video
            </div>
            <div className={styles.footerLink}>
              Ambassadors
            </div>
            <div className={styles.footerLink}>
              Agency
            </div>
            <div className={styles.footerLink}>
              Influencer
            </div>
          </div>

          <div className={styles.footerLinkItems}>
            <h2 className={styles.footerLinkTitle}>社区内容</h2>
            <div className={styles.footerLink}>
              博客
            </div>
            <div className={styles.footerLink}>
              掘金
            </div>
            <div className={styles.footerLink}>
              知乎
            </div>
            <div className={styles.footerLink}>
              WeChat
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}

export default Footer;
