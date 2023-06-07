import { useCodePush } from '@/hooks';
import { Text } from '@rneui/themed';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const CIRCLE_LENGTH = 500;
const RADIUS = CIRCLE_LENGTH / (2 * Math.PI);

const UpgradeVersion = () => {
    const { percentUpdated, showUpgradeScreen } = useCodePush();

    if (!showUpgradeScreen) {
        return <View />;
    }

    return (
        <Animated.View
            key={'uniqueKey'}
            entering={FadeIn.duration(800)}
            exiting={FadeOut.duration(1000)}
            style={styles.container}
        >
            <Svg>
                <Circle
                    cx={width / 2}
                    cy={height / 2}
                    fill="none"
                    r={RADIUS}
                    strokeWidth={24}
                    stroke="#FFF"
                />
                <Circle
                    cx={width / 2}
                    cy={height / 2}
                    fill="none"
                    r={RADIUS}
                    strokeWidth={12}
                    stroke="lightblue"
                    strokeDasharray={CIRCLE_LENGTH}
                    strokeDashoffset={
                        CIRCLE_LENGTH * (1 - percentUpdated / 100)
                    }
                />
            </Svg>
            <View style={styles.point}>
                <Text style={styles.text}>{`${percentUpdated || 0} %`}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    point: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
        marginTop: 12,
    },
});

export default UpgradeVersion;
