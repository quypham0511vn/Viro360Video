import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, ViewStyle } from 'react-native';

import { navigationRef } from '././NavigateAction';
import RootStack from './RootStack';

const styles = {
    flex: 1
} as ViewStyle;

const App = () => {

    return (
        <NavigationContainer ref={navigationRef} >
            <StatusBar hidden></StatusBar>
            <RootStack />
        </NavigationContainer>
    );
};


export default App;
