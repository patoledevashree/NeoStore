import React ,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginStack from './navigation/LoginStack';
import RegisterStack from './navigation/RegisterStack';
import DashboardStack from './navigation/DashboardStack';

const Drawer = createDrawerNavigator();


export default class App extends Component{
  render(){
   
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Login' component={LoginStack} />
          <Drawer.Screen name ='Register' component={RegisterStack}/>
          <Drawer.Screen name = 'Dashboard' component={DashboardStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
