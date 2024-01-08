
import { Viro360Video } from '@viro-community/react-viro/dist/components/Viro360Video';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function App(): React.JSX.Element {

    const url = 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/progressive.mp4';

    const onFinish = () => { };
    const onUpdateTime = () => { };
    const onVideoError = () => { };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello world</Text>
            <Viro360Video
                source={{uri: url}}
                onFinish={onFinish}
                onUpdateTime={onUpdateTime}
                onError={onVideoError}
                loop={true}
                paused={false}
                volume={1.0}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
});

export default App;
