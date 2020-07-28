import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import {toggleUnit} from '../../redux/actions';
import WeatherScreen from '../screens/WeatherScreen';
import { connect } from 'react-redux';
import CustomDrawerContent from './CustomDrawerContent';
import AddLocationScreen from '../screens/AddLocationScreen';

const Drawer = createDrawerNavigator();
const width = Dimensions.get('window').width;
const isLargeScreen = width >= 768;

const DrawerComponent = (props) => {
    const { toggleDrawer, isDrawerOpen } = props.route.params;
    const listeners = ({ navigation, route }) => ({
      drawerOpen: e => {
        toggleDrawer(true);
      },
      drawerClose: e => {
          setTimeout(() => toggleDrawer(false), 200);
      }
    })
    return(
        <Drawer.Navigator
        drawerStyle={isLargeScreen ? {width: 200} : { width: '50%' }}
        overlayColor="transparent"
        drawerContent={(propsNav) => 
        <CustomDrawerContent {...propsNav} 
                            unit = {props.state.weather.unit} 
                            toggleUnit = {() => props.toggleUnit()}
                            />}
        >
            <Drawer.Screen 
            name="Weather" 
            component={WeatherScreen} 
            listeners={listeners}
            />
            <Drawer.Screen 
            name="Add Location" 
            component={AddLocationScreen} 
            listeners={listeners}
            />
        </Drawer.Navigator>
    );
  };

  const mapStateToProps = (state: any) => {
    return { state };
  };

  export default connect(mapStateToProps, {toggleUnit})(DrawerComponent)