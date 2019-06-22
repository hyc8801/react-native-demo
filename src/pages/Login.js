import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.Login = this.Login.bind(this)
  }
  Login() {
    AsyncStorage.setItem('userToken', 'yes');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate('App');
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
        <Ionicons name="lock" size={30} color="#409EFF" />
        <Text> Login! </Text>
        <Button
          title="登录"
          onPress={this.Login}
        />
      </View>
    );
  }
}

export default LoginScreen;
