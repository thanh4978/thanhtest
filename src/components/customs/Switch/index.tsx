import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
} from 'react';

import { StyleSheet, View } from 'react-native';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    State,
    TapGestureHandler,
    TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    interpolateColor,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { clamp, snapPoint } from 'react-native-redash';
import { SwitchProps } from './type';
import { isString } from '@/components/customs/utiles';

const DEFAULT_TRACK_WIDTH = 50;
const DEFAULT_THUMB_WIDTH = 24;

const AnimatedView = Animated.createAnimatedComponent(View);

const Switch: FunctionComponent<SwitchProps> = (props) => {
    const {
        value,
        onValueChange,
        trackColor = { active: '#377DFF', inActive: '#ECECEC' },
        thumbColor = { active: '#FFFFFF', inActive: '#FFFFFF' },
        thumbWidth = DEFAULT_THUMB_WIDTH,
        trackWidth = DEFAULT_TRACK_WIDTH,
        disabled,
    } = props;

    const panRef = useRef<PanGestureHandler>(null);
    const translateX = useSharedValue(0);

    const trackThumbWidth = useMemo(
        () => trackWidth - thumbWidth - 4,
        [trackWidth, thumbWidth]
    );

    useEffect(() => {
        translateX.value = withSpring(value ? trackThumbWidth : 0, {
            overshootClamping: true,
        });
    }, [trackThumbWidth, translateX, value]);

    const trackBgColor = useMemo(() => {
        if (disabled) {
            return {
                active: 'rgba(143, 155, 179, 0.16)',
                inActive: 'rgba(143, 155, 179, 0.16)',
            };
        }

        if (isString(trackColor)) {
            return {
                active: trackColor,
                inActive: trackColor,
            };
        }

        return {
            active: trackColor.active,
            inActive: trackColor.inActive,
        };
    }, [disabled, trackColor]);

    const circleColor = useMemo(() => {
        if (disabled) {
            return {
                active: 'rgba(143, 155, 179, 0.32)',
                inActive: 'rgba(143, 155, 179, 0.32)',
            };
        }
        if (isString(thumbColor)) {
            return {
                active: thumbColor,
                inActive: thumbColor,
            };
        }
        return {
            active: thumbColor.active,
            inActive: thumbColor.inActive,
        };
    }, [disabled, thumbColor]);

    const animSwitchContainer = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            translateX.value,
            [0, trackThumbWidth],
            [trackBgColor.inActive, trackBgColor.active]
        );

        return {
            backgroundColor,
        };
    });

    const animSwitchCircle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            translateX.value,
            [0, trackThumbWidth],
            [circleColor.inActive, circleColor.active]
        );

        const width = interpolate(
            translateX.value,
            [0, trackThumbWidth / 3, trackThumbWidth],
            [thumbWidth, (thumbWidth / 2) * 2.5, thumbWidth]
        );

        return {
            transform: [{ translateX: translateX.value }],
            backgroundColor,
            width,
        };
    });

    const onGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { x: number }
    >({
        onStart: (_e, ctx) => {
            ctx.x = translateX.value;
        },
        onActive: ({ translationX }, ctx) => {
            translateX.value = clamp(translationX + ctx.x, 0, trackThumbWidth);
        },
        onEnd: ({ velocityX }) => {
            const selectedSnapPoint = snapPoint(translateX.value, velocityX, [
                0,
                trackThumbWidth,
            ]);
            translateX.value = withSpring(selectedSnapPoint, {
                overshootClamping: true,
            });
            runOnJS(onValueChange)(selectedSnapPoint !== 0);
        },
    });

    const _handleStateChange = useCallback(
        ({ nativeEvent: { state } }: TapGestureHandlerStateChangeEvent) => {
            if (state !== State.ACTIVE) {
                return;
            }
            onValueChange(!value);
        },
        [onValueChange, value]
    );

    return (
        <TapGestureHandler
            waitFor={panRef}
            enabled={!disabled}
            onHandlerStateChange={_handleStateChange}
        >
            <AnimatedView
                style={[
                    styles.switchContainer,
                    { width: trackWidth },
                    animSwitchContainer,
                ]}
            >
                <PanGestureHandler
                    ref={panRef}
                    enabled={!disabled}
                    onGestureEvent={onGestureEvent}
                >
                    <AnimatedView
                        style={[
                            {
                                width: thumbWidth,
                                height: thumbWidth,
                                borderRadius: thumbWidth,
                            },
                            animSwitchCircle,
                        ]}
                    />
                </PanGestureHandler>
            </AnimatedView>
        </TapGestureHandler>
    );
};

export default Switch;

const styles = StyleSheet.create({
    switchContainer: {
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderRadius: 36.5,
    },
    disabled: {
        opacity: 0.5,
    },
});
