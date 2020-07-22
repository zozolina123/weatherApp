import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from './HeaderLeft';
import DrawerComponent from './DrawerComponent';

const AppNavigation = () => {
    const Stack = createStackNavigator();
    const [isDrawerOpen, toggleDrawer] = useState(false);

    const options = {
        headerLeft: ({}) => <HeaderLeft 
                                toggleDrawer={toggleDrawer} 
                                isDrawerOpen={isDrawerOpen}
                            />,
        headerTitle: '',
        headerTransparent: true
    }
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={options}
                    component={DrawerComponent}
                    initialParams={{
                        toggleDrawer,
                        isDrawerOpen
                    }}
                    name="Drawer"
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation