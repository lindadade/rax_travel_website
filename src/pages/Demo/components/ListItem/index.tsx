import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

const ListItem = (props: { id: Number; done: Boolean; content: String; onClick: (id: Number) => void; }) => {
  const { id, done, content, onClick } = props;

  // 完成项文字样式
  const style = {
    fontSize: '64rpx',
    lineHeight: '96rpx',
    textDecoration: done && 'line-through',
  };

  return (
    <View className="list-item" onClick={() => onClick(id)}>
      <View className="list-dot" />
      <Text style={style}>{content}</Text>
    </View>
  );
};

export default ListItem;
