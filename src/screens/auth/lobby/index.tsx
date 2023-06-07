import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import useStyles from './styles';
import { Button, Image, Text } from '@rneui/themed';
import {
    BackIcon,
    FacebookIcon,
    GoogleIcon,
    LinkEdinIcon,
    images,
} from '@/assets';
import { Headers } from '@/components/customs';
import { NavigationService } from '@/navigation/NavigationService';
import { routes } from '@/constants';
import { GoogleService, transformUser } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { AuthActions, LoadingActions } from '@/redux/reducers';

const Lobby = () => {
    const styles = useStyles();
    const dispatch = useAppDispatch();

    const handleGoogle = async () => {
        dispatch(LoadingActions.showLoading());
        const user = await GoogleService.login();
        dispatch(LoadingActions.hideLoading());
        if (user) dispatch(AuthActions.handleGoogleSignIn(transformUser(user)));
    };

    const handleFacebook = async () => {};

    const handleLinked = () => {
        console.log('handleLinked');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Headers leftIcon={<BackIcon />} />

            {/* Body */}
            <View style={styles.body}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={images.lobby_logo}
                        style={styles.logoImage}
                    />
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Let's you in</Text>
                </View>

                {/* Facebook Login */}
                <TouchableOpacity
                    style={styles.socialContainer}
                    onPress={handleFacebook}
                >
                    <View style={styles.socialIcon}>
                        <FacebookIcon />
                    </View>
                    <Text style={styles.socialText}>
                        Countinue with Facebook
                    </Text>
                </TouchableOpacity>

                {/* Google Login */}
                <TouchableOpacity
                    style={styles.socialContainer}
                    onPress={handleGoogle}
                >
                    <View style={styles.socialIcon}>
                        <GoogleIcon />
                    </View>
                    <Text style={styles.socialText}>Countinue with Google</Text>
                </TouchableOpacity>

                {/* Linked Login */}
                <TouchableOpacity
                    style={styles.socialContainer}
                    onPress={handleLinked}
                >
                    <View style={styles.socialIcon}>
                        <LinkEdinIcon />
                    </View>
                    <Text style={styles.socialText}>Countinue with Linked</Text>
                </TouchableOpacity>

                {/* Or */}
                <View style={styles.orContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line} />
                </View>
            </View>
            {/* Button */}
            <Button
                style={styles.button}
                containerStyle={styles.buttonContainer}
                title={'Sign in with password'}
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.buttonTitle}
                onPress={() => {
                    NavigationService.navigate(routes.SIGN_IN);
                }}
            />

            {/* Sign up */}
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => {
                        NavigationService.navigate(routes.CREATE_ACCOUNT);
                    }}
                >
                    <Text style={styles.signUpButton}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Lobby;
