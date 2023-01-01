import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from '../screens/mainScreen';
import { WelcomeScreen } from '../screens/welcomeScreen';






const SCREENS = [
    // {
    //     name: 'SplashScreen',
    //     component: SplashScreen,
    //     options: { options: { headerShown: false, } }
    // },
    {
        name: 'WelcomeScreen',
        component: WelcomeScreen,
        options: { options: { headerShown: false, } }
    },
    {
        name: 'MainScreen',
        component: MainScreen,
        options: { options: { headerShown: false, } }
    },
];

const { Navigator, Screen } = createNativeStackNavigator();


export const StackNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName={'WelcomeScreen'}>
            {SCREENS.map((screen, index) => (
                <Screen
                    key={index}
                    name={screen.name}
                    component={screen.component}
                    {...screen?.options}
                />
            ))}
        </Navigator>
    );
};
