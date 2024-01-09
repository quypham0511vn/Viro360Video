
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import NavigateAction from '../navigation/NavigateAction';

const InitScreen = () => {
    const navi = () => {
        NavigateAction.navigateScreen('cardBoard');

    }
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableOpacity  onPress={navi}>
                <View style={styles.f1}>
                    <Text style={{ fontSize: 20, color: '#cccccc' }}>Navigate</Text>
                </View>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    f1: {
        // width: '50%',
        // height: '20%',
        padding: 20,
        alignSelf: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    }
});

export default InitScreen;