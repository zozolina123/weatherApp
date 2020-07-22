import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import WeatherScreen from '../screens/WeatherScreen';

const Drawer = createDrawerNavigator();
const width = Dimensions.get('window').width;
const isLargeScreen = width >= 768;

const DrawerComponent = ({route}) => {
    const { toggleDrawer, isDrawerOpen } = route.params;
    return(
        <Drawer.Navigator
        drawerStyle={isLargeScreen ? {width: 200} : { width: '50%' }}
        overlayColor="transparent"
        >
            <Drawer.Screen 
            name="Weather" 
            component={WeatherScreen} 
            listeners={({ navigation, route }) => ({
                drawerOpen: e => {
                  toggleDrawer(true);
                },
                drawerClose: e => {
                    setTimeout(() => toggleDrawer(false), 200);
                }
            })}
            />
        </Drawer.Navigator>
    );
  };

  export default DrawerComponent