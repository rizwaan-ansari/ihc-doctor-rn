import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './i18next';
import 'intl-pluralrules';
import React from 'react';
import type { PropsWithChildren } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LanguageScreen from './src/screens/LanguageScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import HomeScreen from './src/screens/HomeScreen';
import OtpScreen from './src/screens/OtpScreen';
import ConfirmPasswordScreen from './src/screens/ConfirmPasswordScreen';
import BookingListScreen from './src/screens/BookingListScreen';


const RootStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


function App(): React.JSX.Element {

    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="RootStack" component={RootStackNavigator} />
                </AppStack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}


const RootStackNavigator = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
            {/* <RootStack.Screen name="HomeScreen" component={HomeScreen} /> */}
            <RootStack.Screen name="LanguageScreen" component={LanguageScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
            <RootStack.Screen name="LogInScreen" component={LogInScreen} />
            <RootStack.Screen name="OtpScreen" component={OtpScreen} />
            <RootStack.Screen name="ConfirmPasswordScreen" component={ConfirmPasswordScreen} />
        </RootStack.Navigator>
    )
}

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="BookingListScreen" component={BookingListScreen} />
        </HomeStack.Navigator>
    )
}

export default App;
