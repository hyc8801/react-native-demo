import React, { Component } from 'react'
import PushNotification from 'react-native-push-notification';
import { Text, View, PushNotificationIOS, Button, DeviceEventEmitter  } from 'react-native'

export default class Notification extends Component {
  onPressLearnMore() {
    PushNotification.localNotification({
      //... You can use all the options from localNotifications
      message: '主动发送', // (required)
      date: new Date(Date.now() + 60 * 1000), // in 60 secs
      data: {uri: "home", id: 1, name: "cc"},
    });
  }
  cancelAllLocalNotifications() {
    PushNotification.cancelAllLocalNotifications()
  }
  render() {
    return (
      <View>
        <Button title="发送消息" onPress={this.onPressLearnMore}/>
        <Button title="关闭所有的" onPress={this.cancelAllLocalNotifications}/>
      </View>
    )
  }
}

// 配置
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  //(可选)在生成令牌时调用(iOS和Android)
  onRegister: function(token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote or local notification is opened or received
  // (required)在打开或接收远程或本地通知时调用
  onNotification: function(notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification
    //处理通知.

    // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    // 只在iOS上需要
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: 'YOUR GCM (OR FCM) SENDER ID',

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // 应该自动弹出初始通知吗
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * 指定是否需要权限(ios)和令牌(android和ios)，
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * 如果没有，您必须稍后调用PushNotificationsHandler.requestPermissions()
   */
  requestPermissions: true
});

// 全局监听
DeviceEventEmitter.addListener('notificationActionReceived', function(action){
  console.log ('Notification action received: ' + action);
  const info = JSON.parse(action.dataJSON);
  if (info.action == 'Accept') {
    // Do work pertaining to Accept action here
  } else if (info.action == 'Reject') {
    // Do work pertaining to Reject action here
  }
  // Add all the required actions handlers
});

