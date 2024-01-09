import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CardBoard from '../screens/CardBoard';
import InitScreen from '../screens/InitScreen';

const screenOptions = { headerShown: false };
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={'initScreen'} component={InitScreen} />
            <Stack.Screen name={'cardBoard'} component={CardBoard} />
        </Stack.Navigator>
    )

};
export default RootStack;

