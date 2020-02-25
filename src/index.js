import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Pages
import Feed from './pages/Feed';
import Detail from './pages/Detail';
// Drawer pages
import Page1 from './pages/Drawer/Page1';
import Page2 from './pages/Drawer/Page2';
import Page3 from './pages/Drawer/Page3';
// Tabs pages
import Tab1 from './pages/Tabs/Tab1';
import Tab2 from './pages/Tabs/Tab2';
import Tab3 from './pages/Tabs/Tab3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default function src() {
  function createTopTabs() {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{title: 'Hello'}}
        />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  }

  function createBottomTabs() {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    );
  }

  function createHomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            title: 'My feed',
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detail screen',
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
        <Stack.Screen name="Top Tabs" children={createTopTabs} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Page1} />
        <Drawer.Screen name="Favorites" component={Page2} />
        <Drawer.Screen name="Settings" component={Page3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
