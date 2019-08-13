import React from 'react';
import {View, Text, Button, NativeModules} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';

import DeviceInfo from 'react-native-device-info';

class SettingsScreen extends React.Component {
  goDown() {
    console.log(NativeModules.RNEmulatorCheck)
    NativeModules.RNEmulatorCheck.update(
      "http://192.168.13.32:9900/api/crm/file/downloadFile/apprelease.apk",
      "发现新版本V2.0.0",
      "1、Kotlin重构版\n2、支持自定义UI\n3、增加md5校验\n4、更多功能等你探索"
    )
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons name="setting" size={30} color="#409EFF" />
        <Text> Settings! </Text>
        <Text>{DeviceInfo.getDeviceId()}</Text>
        <Button
            onPress={this.goDown}
            title="下载"
          />
      </View>
    );
  }
}

export default SettingsScreen