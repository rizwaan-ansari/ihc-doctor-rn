import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './i18next';
import 'intl-pluralrules';
import './src/components/Drawers/sheets';
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
import AppointmentDetailScreen from './src/screens/_AppointmentDetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import WalletScreen from './src/screens/WalletScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ChangeLanguageScreen from './src/screens/ChangeLanguageScreen';
import PatientListScreen from './src/screens/PatientListScreen';
import { SheetProvider } from 'react-native-actions-sheet';
// import AccountScreen from './src/screens/AccountScreen';


const RootStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


function App(): React.JSX.Element {

    return (
        <GestureHandlerRootView>
            <SheetProvider>
                <NavigationContainer>
                    <AppStack.Navigator screenOptions={{ headerShown: false }}>
                        <AppStack.Screen name="RootStack" component={RootStackNavigator} />
                    </AppStack.Navigator>
                </NavigationContainer>
            </SheetProvider>
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
            {/* <HomeStack.Screen name="AccountScreen" component={AccountScreen} /> */}
            {/* <HomeStack.Screen name="AppointmentDetailScreen" component={AppointmentDetailScreen} /> */}
            {/* <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="BookingListScreen" component={BookingListScreen} />
            <HomeStack.Screen name="NotificationScreen" component={NotificationScreen} />
            <HomeStack.Screen name="WalletScreen" component={WalletScreen} />
            <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <HomeStack.Screen name="ReviewScreen" component={ReviewScreen} />
            <HomeStack.Screen name="ChangeLanguageScreen" component={ChangeLanguageScreen} />
            <HomeStack.Screen name="PatientListScreen" component={PatientListScreen} />
        </HomeStack.Navigator>
    )
}

export default App;
