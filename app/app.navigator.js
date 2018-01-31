import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import MatchScreen from './screens/match.screen';
import PostScreen from './screens/post.screen';

const Splash = {
    screen: SplashScreen,
    navigationOptions: {
        header: null
    }
}
const Login = {
    screen: LoginScreen,
    navigationOptions: {
        header: null
    }
}
const Match = {
    screen: MatchScreen,
    navigationOptions: {
        headerMode: 'screen',
        headerTitle: 'Matches',
        drawerLabel: 'Matches'
    }
}
const Post = {
    screen: PostScreen,
    navigationOptions: {
        headerMode: 'screen',
        headerTitle: 'Post',
        drawerLabel: 'Post'
    }
}
const MatchStack = StackNavigator({ Match }, {})
const RouteConfig = {
    initialRoute: 'Splash'
};
const AppNavigator = DrawerNavigator({
    Splash,
    Login,
    Post,
    Match: { screen: MatchStack }
}, RouteConfig);

export default AppNavigator;