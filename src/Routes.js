import React from 'react'
import Homepage from './components/Homepage'
import ProfileHome from './components/Profile/ProfileHome';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, Button, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import { useKeycloak } from "expo-keycloak";
import Header from './components/Header';
import AddNewClinicTab from './components/ClinicDetails/AddNewClinicTab';
import ClinicDetailsPage from './components/ClinicDetails/ClinicDetailsPage';


// const Stack = createStackNavigator<RouteStackParamList>(Routes);

 const Routes = () => {

    //const { ready } = useKeycloak();
    //console.log(ready)

    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="home"  component={ProfileHome} />
            
                <Stack.Screen name="clinic-details-page" component={ClinicDetailsPage}/>

            </Stack.Navigator>
        </NavigationContainer>

    ) 



}







export default Routes