import React from 'react';
import { Dimensions } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/AntDesign';
import HomeScreen from "./../pages/Home";
import DetailsScreen from "./../pages/Details";
import ModalScreen from "./../pages/Modal";
import SettingsScreen from "./../pages/Settings";
import IconWithBadge from "./../components/IconWithBadge";
import AuthLoadingScreen from "../pages/AuthLoading";
import LoginScreen from "../pages/Login";
import PersonalScreen from "../pages/Personal";
import WebScreen from "../pages/Web";
// import TableScreen from "../pages/Table";
// import CameraScreen from "../pages/Camera";
import PluginsScreen from "../pages/Plugins";

const defaultOption = {
  // 首页
  initialRouteName: 'TabNavigator',
  // 全局默认导航栏样式配置
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}

const drawerWidth = Dimensions.get('window').width;

const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;  
}

// tab栏组件
const TabNavigator = createBottomTabNavigator({
    // Home: createStackNavigator({HomeScreen}, defaultOption),
    // Settings: createStackNavigator({SettingsScreen}, defaultOption),
    Home: HomeScreen,
    Settings: SettingsScreen
  },{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'Settings') {
        iconName = `setting`;
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
});

// 抽屉组件
const DrawerStack = createDrawerNavigator(
  {
    // Home: HomeScreen,
    Personal: PersonalScreen,
  },
  {
    drawerLockMode: 'unlocked',
    drawerWidth: drawerWidth * 0.7,           //设置抽屉策划页面宽度
    drawerPosition: 'left',                   //选项是left或right。默认是left位置。
    useNativeAnimations: true,
  }
)

// 定义路由
const headerStack = createStackNavigator (
  {
    TabNavigator: TabNavigator,
    Details: DetailsScreen,
    WebScreen: WebScreen,
    Plugins: PluginsScreen
  },
  {
    // 首页
    initialRouteName: 'TabNavigator',
    // 全局默认导航栏样式配置
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);



// 全面屏与带导航条 路由集合
const RootStack = createStackNavigator(
  {
    Main: headerStack, // 带header头的组件 其他的全是全面屏
    Drawer: DrawerStack,
    MyModal: ModalScreen,
    // CameraScreen: CameraScreen,
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  }
);




export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)