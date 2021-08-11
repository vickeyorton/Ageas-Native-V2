import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AUTH_PAGE, CLAIM_PAGE, HOME_NAVIGATOR, HOME_PAGE, LOGIN_PAGE } from '../constants/routeNames';
import HomeScreen from '../screens/HomeScreen';
import ClaimScreen from '../screens/ClaimScreen';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeNavigator from './HomeNavigator';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator drawerType="front">
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}/>
            {/* <Drawer.Screen name={HOME_PAGE} component={HomeScreen}/> */}
            <Drawer.Screen name={CLAIM_PAGE} component={ClaimScreen}/>
            <Drawer.Screen name={AUTH_PAGE} component={AuthScreen}/>
            <Drawer.Screen name={LOGIN_PAGE} component={LoginScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
