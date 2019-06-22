import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default class Web extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'http://192.168.13.33:8088/#/pushReport?date=2019-6-19' }}
      />
    )
  }
}
