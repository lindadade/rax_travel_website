import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import styles from './index.module.css';
import { Icon } from '@alifd/meet';
import img1 from '@/assets/images/1.jpg';
import img2 from '@/assets/images/2.jpg';
import img3 from '@/assets/images/3.jpg';
import img4 from '@/assets/images/4.jpg';

function Trips() {
  // 景点
  const trips: {
    id: number;
    img: any;
    alt: string;
    name: string;
    button: string;
  }[] = [
    {
      id: 1,
      img: img1,
      alt: 'Snow Mountain「雪山」',
      name: 'Snow Mountain「雪山」',
      button: 'View Destination',
    },
    {
      id: 2,
      img: img2,
      alt: 'Snow Mountain「雪山」',
      name: 'Snow Mountain「雪山」',
      button: 'View Destination',
    },
    {
      id: 3,
      img: img3,
      alt: 'BeiJi「极光」',
      name: 'BeiJi「极光」',
      button: 'View Destination',
    },
    {
      id: 4,
      img: img4,
      alt: 'Church「教堂」',
      name: 'Church「教堂」',
      button: 'View Destination',
    },
  ];

  return (
    <View id="trips">
      <div className={styles.productsContainer}>
        {/* 标题 */}
        <div className={styles.productsHeading}>Our Favorite Destinations</div>
        {/* 图片卡片 */}
        <div className={styles.productsWrapper}>
          {trips.map((item) => (
            <div key={item.id} className={styles.productCard}>
              {/* 图片 */}
              <Image className={styles.productsImg} source={{ uri: item.img }} alt={item.alt} />
              {/* 内容 */}
              <div className={styles.productInfo}>
                <div className={styles.textWrap}>
                  {/* icon */}
                  <Icon className="icon" type="heart-filling" />
                  <div className={styles.productTitle}>
                    {item.name}
                  </div>
                </div>
                {/* 按钮 */}
                <span className={`${styles.tripBtn} button buttonPrimary buttonNoBig buttonRound`}>
                  {item.button}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </View>
  );
}

export default Trips;
