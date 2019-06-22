import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';

class PersonalScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#6b52ae',
        }}
      >
        <Ionicons name="setting" size={30} color="#409EFF" />
        <Text> Personal! </Text>
      </View>
    );
  }
}

export default PersonalScreen