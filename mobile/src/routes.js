//import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  })
)
//const AppStack = createStackNavigator();

//export default function routes(){
  //return(
 //<NavigationContainer>
 //     <AppStack.Navigator headerMode='none'>
 //       <AppStack.Screen name="Login" component={Login}/>
 //       <AppStack.Screen name="Main" component={Main}/>
 //     </AppStack.Navigator>
 //   </NavigationContainer>
 // );
//}
