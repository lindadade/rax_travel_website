import { createElement } from 'rax';
import View from 'rax-view';
import styles from './index.module.css';

function Email() {
  return (
    // 邮件
    <View>
      {/* 容器 + 图片 */}
      <div className={styles.emailContainer}>
        <div className={styles.emailContent}>
          {/* 描述 */}
          <h1 className={styles.emailH1}>Get Access to Exclusive Offers</h1>
          <p className={styles.emailP}>Sign up for your newsletter below to get $100 off your first trip!</p>
          {/* form 表单 */}
          <div className={styles.formWrap}>
            <label htmlFor="email">
              <input type="email" placeholder="请输入您的邮箱" id="email" />
            </label>
            <span className="button buttonPrimary buttonBig buttonRound">注册</span>
          </div>
        </div>
      </div>
    </View>
  );
}

export default Email;
