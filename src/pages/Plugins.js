import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActionSheetIOS,
  Modal,
  Image
} from 'react-native'

import Picker from 'react-native-picker';
import MyPicker from "../components/Picker";
import { data } from "../utils/data";
import ActionSheet from 'react-native-actionsheet'

export default class Plugins extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }
  componentDidMount() {
    // Image.getSizeWithHeaders('http://mallfile.yayawx.cn/admin/2019062672097.jpeg', {
    //   cookie: 'SESSION=ZWM0MWY2ZTItZjAyYi00YmYwLWJmZTQtMTdmNTI2ZDZmZGVj; hasLogin=1'
    // }, (res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log('失败', err)
    // })
    this.myPicker = this.refs.myPicker
  }
  static navigationOptions = {
    title: '第三方库'
  };
  showActionSheet = () => {
    this.ActionSheet.show()
    
  }
  handleLongRress = () => {
    alert('长按')
  }
  handlePick = () => {
    // this.setState({
    //   modalVisible: true
    // }, () => {
      // Picker.init({
      //   pickerData: data,
      //   pickerConfirmBtnText: '确定',
      //   pickerCancelBtnText: '取消',
      //   pickerTitleText: '',
      //   pickerToolBarBg: [255, 255, 255, 1],
      //   pickerBg: [255, 255, 255, 1],
      //   selectedValue: [59],
      //   onPickerConfirm: data => {
      //       console.log(data);
      //       this.setState({modalVisible: false})
      //   },
      //   onPickerCancel: data => {
      //       console.log(data);
      //       this.setState({modalVisible: false})
      //   },
      //   onPickerSelect: data => {
      //       console.log(data);
      //   }
      // });
      // Picker.show();
      this.myPicker.show()
      // console.error(this.myPicker)
    // })
    // console.log(this.myPicker/)
  }
  handle = () => {
    console.log(Picker.isPickerShow())
  }
  onPickerConfirm(val) {

  }
  render() {
    return (
      <View style={styles.container} onPress={this.handle}>
        <Image style={{width: 50, height: 50}} 
          ref={(ref) => {console.log(ref)}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
        <View style={styles.btn}>
          <Button
              title="原生长按"
              onLongPress={this.handleLongRress}
            />
        </View>
        <View style={styles.btn}>
          <Button
            title="react-native-actionsheet"
            onPress={this.showActionSheet}
          />
          <ActionSheet
            ref={ref => this.ActionSheet = ref}
            title={'Which one do you like ?'}
            options={['Apple', 'Banana', 'cancel']}
            cancelButtonIndex={2}
            destructiveButtonIndex={1}
            onPress={(index) => { /* do something */ }}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="picker 选择器"
            onPress={this.handlePick}
          />
          {/* <Modal
            animationType="none"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Picker.hide();
              this.setState({modalVisible: false})
            }}
          >
            <View onPress={() => {console.log(1111)}} style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: "100%"}}></View>
          </Modal> */}
          <MyPicker 
            data={data} 
            ref="myPicker"
            onPickerConfirm={this.onPickerConfirm}
          />
        </View>
      </View>
    )
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
  },
  fixed: {
    position: 'relative'
  }
})