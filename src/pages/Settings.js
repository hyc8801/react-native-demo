import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';

class SettingsScreen extends React.Component {
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
      </View>
    );
  }
}

export default SettingsScreen