import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import { WebView } from 'react-native-webview';

class PersonalScreen extends React.Component {
  constructor(props) {
    super(props)
    this.onError = this.onError.bind()
  }
  onError(err) {
    console.log(err)
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: '#6b52ae',
        }}
      >
        <View style={{height: 400}}>
          <WebView
            originWhitelist={['*']}
            onError={this.onError}
            source={{ uri: "https://echarts.baidu.com/examples/editor.html?c=area-stack"}}
          />
        </View>
        <Text> Personal! </Text>
      </View>
    );
  }
}

export default PersonalScreen