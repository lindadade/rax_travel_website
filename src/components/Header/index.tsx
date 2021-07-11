import { createElement, useEffect, useState } from 'rax';
import styles from './index.module.css';
import { routerLink } from '@/utils/index';
import { history } from 'rax-app';

function Header() {
  // 导航
  const menuData: {
    title: string;
    link: string;
  }[] = [
    {
      title: 'Trips',
      link: 'trips',
    },
    {
      title: 'About',
      link: 'about',
    },
    {
      title: 'Careers',
      link: 'careers',
    },
    {
      title: 'Contact',
      link: 'contact',
    },
  ];
  // 监听事件
  const [hasVerticalScrolled, setState] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', bindHandleScroll);
    return () => {
      window.removeEventListener('scroll', bindHandleScroll);
    };
  });
  const bindHandleScroll = (event) => {
    // 滚动的高度
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);
    setState(() => scrollTop > 100);
  };
  return (
    // 头部栏
    <div className={`${styles.navContainer} ${hasVerticalScrolled ? styles.navContainer2 : ''}`}>
      {/* 标签 */}
      <div className={styles.navLink} onClick={() => routerLink('home')}>
        EXPLORIX
      </div>
      {/* 响应式后 bar 图标 */}
      <div className={styles.navBar} />
      {/* navMenu */}
      <div className={styles.navMenu}>
        {menuData.map((item) => {
          return (
            <div className={styles.navLink} key={item.link} onClick={() => routerLink(item.link)}>
              {item.title}
            </div>
          );
        })}
        <div className={styles.navLink} key="gobang" onClick={() => history.push('gobang')}>
          Gobang
        </div>
      </div>
      {/* navBtn */}
      <div className={styles.navBtn}>
        <div className="button buttonPrimary buttonNoBig buttonRound" onClick={() => routerLink('trips')}>
          Book a Flight
        </div>
      </div>
    </div>
  );
}

export default Header;
