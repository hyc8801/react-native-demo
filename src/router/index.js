import {createStackNavigator} from 'react-navigation';
import HomeScreen from "../pages/Home";
import DetailsScreen from "../pages/Details";

// 定义路由
const MainStack = createStackNavigator (
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    // 首页
    initialRouteName: 'Home',
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

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootStack