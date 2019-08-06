import React from 'react';
import {View, Button, Image, StyleSheet, Linking, TextInput, ScrollView} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: 'Useless Placeholder',
      realm: null
    };
  }
  componentDidMount() {
    // 唤醒APP
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  // static navigationOptions = {
    // headerTitle: <LogoTitle />,
    // headerRight: (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="设置"
    //     style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
    //   />
    // ),
    // title: 'Home', // 设置导航栏标题
    // headerStyle: {
    //   backgroundColor: '#409EFF',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   color: '#fff',
    //   fontWeight: 'bold',
    // },
  // };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      title: 'home',
    };
  };
  changeText = (text) => {
    console.log(text)
    this.setState({
      text
    })
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        {/* <TextInput
        secureTextEntry={true}
        style={{minHeight: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.changeText}
          value={this.state.text}
          multiline={true}
        /> */}
        <View style={styles.btn}>
          <Button
            onPress={() => this.props.navigation.push('MyModal')}
            title="全屏页面"
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Go to Details"
            onPress={() =>
              this.props.navigation.push('Details', {
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
            title="日历"
            onPress={() =>
              this.props.navigation.push('Calendar')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="日程"
            onPress={() =>
              this.props.navigation.push('Schedule')}
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
            title="相机"
            onPress={() =>
              this.props.navigation.push('CameraScreen')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="第三方插件"
            onPress={() =>
              this.props.navigation.push('Plugins')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="聊天"
            onPress={() =>
              this.props.navigation.push('Chat')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="ANTD 组件库"
            onPress={() =>
              this.props.navigation.push('Antd')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="FlatList 横向"
            onPress={() =>
              this.props.navigation.push('FlatListScreen')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="消息推送"
            onPress={() =>
              this.props.navigation.push('Notification')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="动画"
            onPress={() =>
              this.props.navigation.push('Animation')}
          />
        </View>
        {/* 路由跳转，并传参 */}
        {/* <TextInput
        style={{height: 40}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      /> */}
      </ScrollView>
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