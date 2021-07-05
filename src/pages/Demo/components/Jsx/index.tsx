import { createElement } from 'rax';
import View from 'rax-view';

function Jsx() {
  const element = <h1>{'Hello, world!'}</h1>;
  const arr = [
    <span>Hello, world! </span>,
    <span>Hello, Rax！</span>,
  ];
  const comment = <p> { /* 注释... */ } Hello, world!</p>;
  return (
    <View>
      普通声明：
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
      </div>
      表达式：
      <div>
        {element}
      </div>
      使用 JSX 数组：
      <div>
        {arr}
      </div>
      在 JSX 中注释：
      <div>
        {comment}
      </div>
    </View>
  );
}

export default Jsx;
