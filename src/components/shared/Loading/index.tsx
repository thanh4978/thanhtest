import React, { FunctionComponent, useEffect } from 'react';

import { View } from 'react-native';
import Animated, {
    Extrapolate,
    cancelAnimation,
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

import styles from './styles';
import { useAppSelector } from '@/hooks';
import { getIsLoading } from '@/redux/selectors';

const AnimatedView = Animated.createAnimatedComponent(View);

const Loading: FunctionComponent = () => {
    const isLoading: boolean = useAppSelector(getIsLoading);

    const progress = useSharedValue(0);
    const colorProgress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1, { duration: 1000 }),
            -1,
            true
        );

        return () => {
            cancelAnimation(progress);
        };
    }, []);

    useEffect(() => {
        colorProgress.value = withTiming(isLoading ? 1 : 0, { duration: 500 });
    }, [isLoading]);

    const overlayStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            colorProgress.value,
            [0, 1, 0],
            ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0)']
        );

        return {
            backgroundColor,
        };
    }, []);

    const scaleStyle = useAnimatedStyle(() => {
        const scaleContainer = interpolate(
            progress.value,
            [0, 1, 0],
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale: scaleContainer }],
        };
    }, []);

    const pointerStyle = useAnimatedStyle(() => {
        const scaleContainer = interpolate(
            progress.value,
            [0, 1, 0],
            [1, 0, 1],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale: scaleContainer }],
        };
    }, []);

    if (!isLoading) {
        return <View />;
    }

    return (
        <AnimatedView style={[styles.overlay, overlayStyle]}>
            <Animated.View style={[styles.container, scaleStyle]} />
            <Animated.View style={[styles.pointer, pointerStyle]} />
        </AnimatedView>
    );
};

export default Loading;
