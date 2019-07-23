
import React from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  AsyncStorage,
  ToastAndroid,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewPagerAndroid,
  DatePickerAndroid,
  Vibration,
  Picker
} from 'react-native';
import request from "../utils/request";

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      ActionSheet: null,
      language: "",
    }
    this.signOut = this.signOut.bind(this)
    this.handleAlert = this.handleAlert.bind(this)
    this._onPressButton = this._onPressButton.bind(this)
    this.DatePickerAndroid = this.DatePickerAndroid.bind(this)
  }
  componentDidMount() {
    request.get('/admin/orderEverydayData', {
      date: "2019-06-23"
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // request.post('http://192.168.13.18:8888/api/a', {
    //   good_id: 306,
    //   num: 1
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'A Nested Details Screen'),
    };
  };
  signOut() {
    // 登出
    AsyncStorage.removeItem('userToken').then(() => {
      this.props.navigation.navigate('Auth')
    })
  }
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
  handleToast() {
    // ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
    // ToastAndroid.showWithGravity(
    //   "All Your Base Are Belong To Us",
    //   ToastAndroid.SHORT,
    //   ToastAndroid.CENTER
    // );
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  }
  _onPressButton(e) {
    console.log(111)
  }
  async DatePickerAndroid() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // 要设置默认值为今天的话，使用`new Date()`即可。
        // 下面显示的会是2020年5月25日。月份是从0开始算的。
        date: new Date(2020, 4, 25)
      });
      console.log(action, year, month, day)
      if (action !== DatePickerAndroid.dismissedAction) {
        // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
  render () {
    // 读取路由传参
    // 该写法当title不存在时容易报错，推荐后者
    // let title = this.props.navigation.state.params.title;
    // 推荐写法
    // const itemId = this.props.navigation.getParam ('itemId', 'NO-ID');
    // const title1 = this.props.navigation.getParam ('title', 'NO-ID');
    // console.log ('id', itemId);
    // console.log ('title', title1);
    return (
      <View style={styles.container}>
        <View style={styles.btn}>
          <Button
            title="退出"
            onPress={this.signOut}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push ('Details')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate ('Home')}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack ()}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="安卓日期选择"
            onPress={this.DatePickerAndroid}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="震动"
            onPress={() => Vibration.vibrate(400)}
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
            title="toast"
            onPress={this.handleToast}
          />
        </View>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.btn1}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.btn1}>
            <Text style={styles.text}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={styles.btn1}>
            <Text style={styles.text}>TouchableWithoutFeedback</Text>
            {/* 本组件没有任何视觉反馈 */}
            {/* 常见的使用场景比如想实现点击空白处触发某个操作，就那么把可以部分空白用TouchableWithoutFeedback包起来，或者绝对定位覆盖住 */}
          </View>
        </TouchableWithoutFeedback>
        {/* <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}>
          <View style={styles.pageStyle} key="1">
            <Text style={styles.text}>轮播 page1</Text>
          </View>
          <View style={styles.pageStyle} key="2">
            <Text style={styles.text}>轮播 page2</Text>
          </View>
        </ViewPagerAndroid> */}
        <Picker
          mode="dialog"
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
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
  },
  btn1: {
    backgroundColor: '#1890ff',
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    fontWeight: "600"
  },
  viewPager: {
    flex: 1,
    overflow: "hidden"
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#21ba45',
  }
})

export default DetailsScreen