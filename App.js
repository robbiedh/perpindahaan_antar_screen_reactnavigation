/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createBottomTabNavigator ,createAppContainer } from "react-navigation";
import  Home from './pages/Home'
import  Setting from './pages/Setting'
import Profile from './pages/Profile';


const AppNavigator =createStackNavigator(
  {HomeScreen :{screen :Home ,navigationOptions:{ header:null}},
  SettingScreen :{screen :Setting,navigationOptions:{ header:null}},
  ProfileScreen :{screen :Profile,navigationOptions:{ header:null}},
})

const MyApp=createAppContainer(AppNavigator)
export default class App extends Component {
  render() {
    return (
     <MyApp />
    );
  }
}
