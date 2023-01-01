import React, { useState, createContext, useEffect } from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { StackNavigator } from './stack';


enableScreens();


export const AppWithNavigation = () => {




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                hidden={true}
                animated={true}
                //barStyle='default'
                backgroundColor={'transparent'}
                translucent={true}
            />
            {/* <StatusBar
                hidden
                barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            /> */}
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </SafeAreaView >
    );
};


