import React from 'react';
import {View, Text, Button, Image} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="设置"
        style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
      />
    ),
    title: 'Home', // 设置导航栏标题
    headerStyle: {
      backgroundColor: '#409EFF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      fontWeight: 'bold',
    },
  };
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => this.props.navigation.navigate('MyModal')}
          title="全屏页面"
          color="#fff"
        />
        <Text> Home Screen </Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate ('Details', {
              title: '路由参数title',
            })}
        />

        
        {/* 路由跳转，并传参 */}
      </View>
    );
  }
}

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/images/person.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}