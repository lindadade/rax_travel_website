import styles from './index.module.css';
import { createElement } from 'rax';
import View from 'rax-view';
import { Icon } from '@alifd/meet';

function State() {
  // Icon 图标
  const statsData: {
    id: number;
    icon: string;
    title: string;
    desc: string;
  }[] = [
    {
      id: 1,
      icon: 'camera',
      title: 'Over 100 Destinations',
      desc: 'Travel to over 100 unique places',
    },
    {
      id: 2,
      icon: 'exit',
      title: '1 Million Trips Made',
      desc: 'Over 1 million trips completed last year',
    },
    {
      id: 3,
      icon: 'dashboard',
      title: 'Fastest Support',
      desc: 'Access our support team 24/7',
    },
    {
      id: 4,
      icon: 'smile',
      title: 'Best Deals',
      desc: 'We offer the best prices',
    },
  ];
  return (
    // 特点
    <View id="careers">
      <div className={styles.statsContainer}>
        {/* 描述 */}
        <h1 className={styles.heading}>Why choose us ?</h1>
        {/* Icon 容器 */}
        <div className={styles.statsWrapper}>
          {statsData.map((item, index) => {
            return (
              <div className={styles.statsBox} key={item.id}>
                <Icon type={item.icon} className={`${styles.icon} color${index + 1}`} />
                <p className={styles.title}>{item.title}</p>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </View>
  );
}

export default State;
