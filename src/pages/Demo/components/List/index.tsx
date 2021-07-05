// index.jsx
import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';

import ListItem from '../ListItem';
import ListItem2 from '../ListItem2';
import './index.css';

interface listType {
  id: number;
  content: string;
  done: boolean;
}

const List = () => {
  // 初始化 itemId 每次添加新列表项就 +1
  const [itemId, setItemId] = useState(0);
  // 初始化列表
  const [list, setList] = useState<listType[]>([]);
  // 初始化 TextInput 内容
  const [inputValue, setInputValue] = useState('');

  // 输入框输入事件
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  // 添加按钮点击事件
  const handleAddButtonClick = () => {
    // 构造列表项数据结构
    const item = {
      id: itemId,
      content: inputValue,
      done: false,
    };
    // immutable 思想 生成新的引用
    const newList = [...list, item];
    setList(newList);
    // 清空输入框
    setInputValue('');
    // itemId ++
    setItemId(itemId + 1);
  };

  // 列表项点击事件
  const handleItemClick = (id) => {
    // 遍历列表 当事件未完成时标记为已完成 当事件已完成时删除
    const newList = list.filter((item) => {
      const temp = item;
      if (temp.id !== id) return true;
      if (temp.done) {
        return false;
      } else {
        temp.done = true;
        return temp;
      }
    });
    setList(newList);
  };

  return (
    <View className="list">
      <View className="list-input-wrapper">
        <TextInput
          className="list-input"
          value={inputValue}
          onInput={handleUserInput}
        />
        <View className="list-add-button" onClick={handleAddButtonClick}>
          <Text>添加</Text>
        </View>
      </View>
      <View className="list-item-wrapper">
        {list.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            content={item.content}
            done={item.done}
            onClick={handleItemClick}
          />
        ))}
      </View>
      <View className="list-item-wrapper">
        {list.map((item) => (
          <ListItem2
            key={item.id}
            id={item.id}
            content={item.content}
            done={item.done}
            onClick={handleItemClick}
          />
        ))}
      </View>
    </View>
  );
};

export default List;
