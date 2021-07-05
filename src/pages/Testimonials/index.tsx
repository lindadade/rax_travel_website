import { createElement } from 'rax';
import View from 'rax-view';
import styles from './index.module.css';
import { Icon } from '@alifd/meet';
import Image from 'rax-image';
import img1 from '@/assets/images/21062901.jpeg';
import img2 from '@/assets/images/21062902.jpeg';

function Testimonials() {
  // 图片
  const images: {
    id: number;
    img: any;
  }[] = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
  ];
  return (
    // 关于我们
    <View id="about">
      <div className={styles.testimonialsContainer}>
        {/* 标题 */}
        <div className={styles.topLine}>Testimonials</div>
        <div className={styles.description}>What People are Saying</div>
        {/* 容器 */}
        <div className={styles.contentWrapper}>
          <div className={styles.columnOne}>
            {/* 描述1 */}
            <div className={styles.testimonial}>
              <Icon className={`${styles.color1} ${styles.icon}`} type="success" />
              <h3>Ling Mu</h3>
              <p>
                You have unique gifts and talents that no one else in this world has. Sometimes we feel that we needto
                be someone else in order to fit in be a better mother or wife or portray an image that we believele else
                will love. No matter how hard you try to be someone else you will never be good enoughYou will do the
                best and be the happiest only if you st op living by someone else&apos;s standards and startusing your
                unique potential to shine like a light in this world
              </p>
            </div>
            {/* 描述2 */}
            <div className={styles.testimonial}>
              <Icon className={`${styles.color2} ${styles.icon}`} type="favorites-filling" />
              <h3>Qi Qiu</h3>
              <p>
                Sooner or later, the time comes when we all must become responsible adults and learn to give up what we
                want, so we can choose to do what is right. Of course, a lifetime of responsibility isn&apos;t always
                easy. And as the years go on, it&apos;s a burden that can become too heavy for some to bear. But still
                we try to do what is best, what is good. Not only for ourselves, but for those we love. Yes, sooner or
                later we must all become responsible adults. No one knows this better than the young.
              </p>
            </div>
          </div>

          {/* 图片 */}
          <div className={styles.columnTwo}>
            {images.map((item) => (
              <div key={item.id}>
                <Image className={styles.Images} source={{ uri: item.img }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </View>
  );
}

export default Testimonials;
