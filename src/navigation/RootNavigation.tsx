import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getAuthEnableBiometric, getAuthEnableSignIn } from '@/redux/selectors';
import { authentication } from '@/core';
import { AuthActions } from '@/redux/reducers';
import { GoogleService, getMode, transformUser } from '@/utils';
import { useThemeMode } from '@rneui/themed';
import { StatusBar, StatusBarStyle } from 'react-native';

const RootNavigation = () => {
    const dispatch = useAppDispatch();
    const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
    const enableBiometric = useAppSelector(getAuthEnableBiometric);

    useEffect(() => {
        // const checkEnableSignInBiometric = async () => {
        //     if (enableBiometric) {
        //         const result =
        //             await authentication.authenticateWithBiometrics();
        //         if (result && result.username && result.password) {
        //             dispatch(
        //                 AuthActions.handleLogin({
        //                     username: result.username,
        //                     password: result.password,
        //                 })
        //             );
        //         }
        //     }
        // };
        // checkEnableSignInBiometric();
    }, []);

    //configure google web client id
    React.useEffect(() => {
        GoogleService.configure({
            webClientId:
                '713547640262-40gdl0270si0ut5gejugmorp7qiolr0r.apps.googleusercontent.com',
        });
        return () => {};
    }, []);

    // when open app, check user is login or not
    const unsubscribe = async () => {
        if (await GoogleService.checkSignIn()) {
            const user = await GoogleService.currentUser();
            dispatch(AuthActions.handleGoogleSignIn(transformUser(user)));
            console.log('Has login');
        } else {
            dispatch(AuthActions.handleGoogleSignOut());
            await GoogleService.logout();
        }
    };
    React.useEffect(() => {
        unsubscribe();
        return () => {};
    }, []);

    const { mode } = useThemeMode();
    const [statusBarStyle, setStatusBarStyle] =
        React.useState<StatusBarStyle>('default');
    const getMode = (mode: string) => {
        switch (mode) {
            case 'dark':
                setStatusBarStyle('light-content');
                return 'light-content';
            case 'light':
                setStatusBarStyle('dark-content');
                return 'dark-content';
            default:
                setStatusBarStyle('default');
                return 'default';
        }
    };
    React.useEffect(() => {
        getMode(mode);
    }, [mode]);

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar
                barStyle={statusBarStyle}
                animated={true}
                showHideTransition={'fade'}
            />
            {enableSignIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default RootNavigation;
