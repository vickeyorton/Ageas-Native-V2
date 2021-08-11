import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AUTH_PAGE, CLAIM_PAGE, HOME_PAGE, SIGNIN_PAGE,INCIDENT_PAGE, CONTACT_PAGE, INVOLVED_PAGE, ADDPASSENGER_PAGE, SUMMARY_PAGE, THANKYOU_PAGE } from '../constants/routeNames';
import HomeScreen from '../screens/HomeScreen';
import ClaimScreen from '../screens/ClaimScreen';
import AuthScreen from '../screens/AuthScreen';
import SigninScreen from '../screens/LoginScreen';
import IncidentScreen from '../screens/IncidentScreen';
import Contact from '../screens/ContactScreen/ContactDetails';
import Involved from '../screens/InvolvedScreen/InvolvedPartyDetails';
import AddPassenger from '../screens/AddPassengerScreen/AddPassenger';
import Summary from '../screens/Summary/Summary';
import Thankyou from '../screens/Thankyou/Thankyou';

const HomeNavigator = () => {
    const Home = createStackNavigator();
    return (
        <Home.Navigator initialRouteName={HOME_PAGE} 
        screenOptions={{ headerStyle: { backgroundColor: '#8e419c' } ,
        headerTintColor: '#fff'}}>
            <Home.Screen name={HOME_PAGE} component={HomeScreen}/>
            <Home.Screen name={CLAIM_PAGE} component={ClaimScreen}/>
            <Home.Screen name={AUTH_PAGE} component={AuthScreen}/>
            <Home.Screen name={SIGNIN_PAGE} component={SigninScreen}/>
            <Home.Screen name={INCIDENT_PAGE} component={IncidentScreen}/>
            <Home.Screen name={CONTACT_PAGE} component={Contact}/>
            <Home.Screen name={INVOLVED_PAGE} component={Involved}/>
            <Home.Screen name={ADDPASSENGER_PAGE} component={AddPassenger}/>
            <Home.Screen name={SUMMARY_PAGE} component={Summary}/>
            <Home.Screen name={THANKYOU_PAGE} component={Thankyou}/>
        </Home.Navigator>
    )
}

export default HomeNavigator
