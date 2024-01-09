
import { Viro360Image, Viro360Video, ViroARScene, ViroARSceneNavigator, ViroAnimations, ViroBox, ViroImage, ViroScene, ViroText, ViroVRSceneNavigator, ViroVideo } from '@viro-community/react-viro';
import React, { useRef, useState } from 'react';
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import navigateAction from '../navigation/NavigateAction';


var w = Dimensions.get('screen').width;
var h = Dimensions.get('screen').height;

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

    const handleClickVideo = (props: any) => {
        // ref?.current?.seekToTime?.(0);
        console.log('jump 2 sence', props);
        props.sceneNavigator?.push({ scene: SecondSceneAR });

        navigateAction.goBack();
    };

    return (
        <ViroScene>
            <Viro360Video
                ref={ref}
                source={{ uri: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/progressive.mp4' }}
                onFinish={onFinish}
                onUpdateTime={onUpdateTime}
                onError={onVideoError}
                onBufferStart={() => console.log('start')}
                loop={true}
                paused={false}
                muted={muted}
                volume={volume}
                style={{ width: w, height: h, flex: 1 }}
            />
            <ViroText
                position={[0, -2, -1]}
                text="Bat dau lai video nay"
                onClick={handleClickVideo}
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

const SecondSceneAR = () => {
    const handleClick = (props: any) => {
        console.log('replace 1 sence', props.sceneNavigator);
        props.sceneNavigator?.replace({ scene: FirstSceneAR });
    };

    return (
        <ViroScene >
            <ViroText
                position={[0, -2, -1]}
                text="Chuyen canh sang"
                onClick={handleClick}
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

const CardBoard = ({navigation}:any) => {

    return (
        <View style={{ flex: 1 }} >
            
            <View style={styles.f1}>
                <ViroVRSceneNavigator initialScene={{
                    scene: FirstSceneAR
                }}
                    viroAppProps={{ displayObject: false }}
                    autofocus={true}
                    onExitViro={() => {
                        console.log('exit');
                        navigation.goBack();
                    }}
                    vrModeEnabled={true}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    f1: {
        width: '100%',
        height: h,
        flex: 1,
        alignSelf: 'center'
    }
});

export default CardBoard;
