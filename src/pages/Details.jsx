
import React from 'react';
import {View, Text, Button} from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'A Nested Details Screen'),
    };
  };
  render () {
    // 读取路由传参
    // 该写法当title不存在时容易报错，推荐后者
    // let title = this.props.navigation.state.params.title;
    // 推荐写法
    const itemId = this.props.navigation.getParam ('itemId', 'NO-ID');
    const title1 = this.props.navigation.getParam ('title', 'NO-ID');
    console.log ('id', itemId);
    console.log ('title', title1);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>{title1}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push ('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate ('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack ()}
        />
      </View>
    );
  }
}

export default DetailsScreen