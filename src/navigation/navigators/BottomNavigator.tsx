import {
    BottomTabBarProps,
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Icon, makeStyles, normalize } from '@rneui/themed';
import React, { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import { routes } from '@/constants';
import { Applications, Home, Messages, Profile, SaveJob } from '@/screens/main';
import { Device } from '@/utils';

const BottomTabs = createBottomTabNavigator();

const WIDTH = Device.getDeviceWidth();

const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
};

const choseIcon = (route: routes) => {
    switch (route) {
        case routes.HOME:
            return 'home';
        case routes.SAVE_JOB:
            return 'layers';
        case routes.APPLICATIONS:
            return 'copy';
        case routes.MESSAGES:
            return 'chatbubble-ellipses';
        case routes.PROFILE:
            return 'person';
        default:
            return 'home';
    }
};

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flexDirection: 'row',
        height: normalize(56),
        borderTopColor: colors.grey4,
        borderTopWidth: normalize(0.5),
        backgroundColor: colors.white,
        justifyContent: 'space-around',
    },
    box: {
        flex: 1,
        width: normalize(56),
        height: normalize(56),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: WIDTH / 10,
    },
    focused: {
        backgroundColor: colors.white,
    },
}));

const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

const BottomNavigator: FunctionComponent = () => {
    const styles = useStyles();
    const Tab = ({ navigation, descriptors, state }: BottomTabBarProps) => {
        const progressGrowth = useSharedValue(0);

        // use effect will call when change tab
        useEffect(() => {
            progressGrowth.value = withSpring(-20, {
                damping: 10,
                stiffness: 100,
            });

            // before change tab, reset progressGrowth
            return () => {
                progressGrowth.value = 0;
            };
        }, [state.index]);

        return (
            <View style={styles.container}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({
                                name: route.name,
                                merge: true,
                            } as any);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const animatedStyle = useAnimatedStyle(() => {
                        const translateY = isFocused ? progressGrowth.value : 0;
                        return {
                            transform: [{ translateY: translateY }],
                        };
                    }, []);

                    return (
                        <AnimatedTouch
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={
                                isFocused ? { selected: true } : {}
                            }
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[
                                styles.box,
                                animatedStyle,
                                {
                                    backgroundColor: isFocused
                                        ? '#246BFD'
                                        : styles.focused.backgroundColor,
                                },
                            ]}
                        >
                            <Icon
                                name={choseIcon(route.name as routes)}
                                type="ionicon"
                                color={isFocused ? 'white' : '#6396FF'}
                                size={24}
                            />
                        </AnimatedTouch>
                    );
                })}
            </View>
        );
    };

    return (
        <BottomTabs.Navigator
            screenOptions={screenOptions}
            tabBar={(props: BottomTabBarProps) => <Tab {...props} />}
        >
            <BottomTabs.Screen name={routes.HOME} component={Home} />
            <BottomTabs.Screen name={routes.SAVE_JOB} component={SaveJob} />
            <BottomTabs.Screen
                name={routes.APPLICATIONS}
                component={Applications}
            />
            <BottomTabs.Screen name={routes.MESSAGES} component={Messages} />
            <BottomTabs.Screen name={routes.PROFILE} component={Profile} />
        </BottomTabs.Navigator>
    );
};

export default BottomNavigator;
