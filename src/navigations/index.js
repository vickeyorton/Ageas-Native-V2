import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <HomeNavigator/>
            {/* <DrawerNavigator/> */}
        </NavigationContainer>
    )
}

export default AppNavigator;