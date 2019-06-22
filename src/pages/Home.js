import React from 'react';
import {View, Text, Button, Image, Alert, TextInput, StyleSheet} from 'react-native';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.handleAlert = this.handleAlert.bind(this)
    this.state = { 
      text: 'Useless Placeholder',
      realm: null
    };
  }
  componentWillMount() {
    
  }
  static navigationOptions = {
    // headerTitle: <LogoTitle />,
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
  handleAlert() {

    Alert.alert('提示', '你点击了一个按钮', [
      {
        text: '取消', onPress: () => console.log('dddd')
      },
      {
        text: '确定', onPress: () => console.log('dddd')
      }
    ])
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.btn}>
          <Button
            onPress={() => this.props.navigation.navigate('MyModal')}
            title="全屏页面"
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Go to Details"
            onPress={() =>
              this.props.navigation.navigate('Details', {
                title: '路由参数title',
              })}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="抽屉屏幕"
            onPress={() =>
              this.props.navigation.push('Drawer')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="嵌套H5"
            onPress={() =>
              this.props.navigation.push('WebScreen')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="数据库表格"
            onPress={() =>
              this.props.navigation.push('Table')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="alert"
            onPress={this.handleAlert}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="相机"
            onPress={this.handleAlert}
          />
        </View>
        {/* 路由跳转，并传参 */}
        {/* <TextInput
        style={{height: 40}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      /> */}
      </View>
    );
  }
}

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./../assets/images/person.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  btn: {
    marginBottom: 10,
  }
})

export default HomeScreen