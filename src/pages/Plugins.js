import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActionSheetIOS,
} from 'react-native'

import Picker from 'react-native-picker';
import ActionSheet from 'react-native-actionsheet'

let data = [];
for(var i=0;i<100;i++){
    data.push(i);
}

export default class Plugins extends Component {
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  handleLongRress = () => {
    alert('长按')
  }
  handlePick = () => {
    Picker.init({
      pickerData: data,
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '',
      pickerToolBarBg: [255, 255, 255, 1],
      pickerBg: [255, 255, 255, 1],
      selectedValue: [59],
      onPickerConfirm: data => {
          console.log(data);
      },
      onPickerCancel: data => {
          console.log(data);
      },
      onPickerSelect: data => {
          console.log(data);
      }
    });
    Picker.show();
  }
  handle = () => {
    console.log(Picker.isPickerShow())
  }
  render() {
    return (
      <View style={styles.container} onPress={this.handle}>
        <View style={styles.btn1}>
          <Text onLongPress={this.handleLongRress} style={styles.text}>第三方插件</Text>
        </View>
        <View style={styles.btn}>
          <Button
              title="原生长按"
              onPress={this.handleAlert}
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
  }
})