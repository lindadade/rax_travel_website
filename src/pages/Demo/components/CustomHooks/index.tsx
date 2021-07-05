import { createElement, useState, useEffect } from 'rax';

const useDocumentTitle = function (title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

function CustomHooks() {
  const [count, setCount] = useState(0);
  useDocumentTitle(`You clicked ${count} times`);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CustomHooks;
