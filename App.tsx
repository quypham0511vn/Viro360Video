
import { Viro360Video, ViroARScene, ViroARSceneNavigator, ViroScene, ViroText, ViroVRSceneNavigator, ViroVideo } from '@viro-community/react-viro';
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const FirstSceneAR = () => {

    const onInitialized = (state: any, reason: any) => { console.log('guncelleme', state, reason); }
    const onFinish = () => { console.log('end') };
    const onUpdateTime = () => { 
        // console.log("Video time update, current: ");
 };
    const onVideoError = () => { console.log("Video loading failed with error: "); };

    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const ref = useRef(null);

    const handleClickRestartVideo = () => {
        ref?.current?.seekToTime?.(0);
    };

    return (
        <ViroScene >
            <Viro360Video
                ref={ref}
                source={{ uri: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/progressive.mp4' }}
                onFinish={onFinish}
                onUpdateTime={onUpdateTime}
                onError={onVideoError}
                loop={true}
                paused={false}
                muted={muted}
                volume={volume}
            />
            <ViroText
                position={[0, -2, -1]}
                text="Bat dau lai video nay"
                onClick={handleClickRestartVideo}
                transformBehaviors={["billboard"]}
                width={2}
                height={2}
                textLineBreakMode="Justify"
                outerStroke={{ type: "Outline", width: 38, color: '#A1EE42CE' }}
                style={{
                    color: "#C42607",
                    fontFamily: 'Arial',
                    fontSize: 30,
                    fontWeight: '400',
                }}
            />
        </ViroScene>
    );
};


function App(): React.JSX.Element {
    const w = Dimensions.get('screen').width;
    const h = Dimensions.get('screen').height;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: w, height: h }}>
                <ViroVRSceneNavigator initialScene={{
                    scene: FirstSceneAR
                }}
                    autofocus={true}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    f1: {
        flex: 1
    }
});

export default App;