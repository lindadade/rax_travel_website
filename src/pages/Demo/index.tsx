import { createElement, useState } from 'rax';
import View from 'rax-view';

import List from './components/List';
import styles from './index.module.css';
import Jsx from './components/Jsx';
import CustomHooks from './components/CustomHooks';

// 初始化 Rax.js 框架做的入门例子 https://juejin.cn/post/6844904168331689997
// 实现 TS 重构
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <View className={styles.homeContainer}>
      <span>Hello</span>
      <span>LinM</span>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <List />
      <Jsx />
      <CustomHooks />
    </View>
  );
}
