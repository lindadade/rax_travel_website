import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

class ListItem2 extends Component<{ // eslint-disable-line
  id?: Number;
  done?: Boolean;
  content?: String;
  onClick: (id?: Number) => void;
}> {
  style = {
    fontSize: '64rpx',
    lineHeight: '96rpx',
    textDecoration: this.props.done && 'line-through',
  };
  render() {
    return (
      <View className="list-item" onClick={() => this.props.onClick(this.props.id)}>
        <View className="list-dot" />
        <Text style={this.style}>{this.props.content}</Text>
      </View>
    );
  }
}
export default ListItem2;
