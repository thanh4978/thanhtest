import React from 'react';
import useStyles from './styles';
import { Button, CheckBox, Image, Text } from '@rneui/themed';
import {
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { InputCustom, Headers } from '@/components/customs';
import {
    BackIcon,
    EmailIcon,
    FacebookIcon,
    GoogleIcon,
    LinkEdinIcon,
    images,
} from '@/assets';
import { NavigationService } from '@/navigation/NavigationService';
import { routes } from '@/constants';

const CreateAccount: React.FunctionComponent = () => {
    const styles = useStyles();
    const [credentials, setCredentials] = React.useState<{
        email: string;
        password: string;
    }>({
        email: '',
        password: '',
    });
    const [checked, setChecked] = React.useState<boolean>(false);
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    {/* Header */}
                    <Headers
                        leftIcon={<BackIcon />}
                        onPressLeftIcon={() => {
                            if (NavigationService.canGoBack()) {
                                NavigationService.goBack();
                                return;
                            }
                            NavigationService.navigate(routes.LOBBY);
                        }}
                    />

                    {/* Body */}
                    <View style={styles.body}>
                        {/* Logo */}
                        <View style={styles.logoContainer}>
                            <Image
                                source={images.signup_logo}
                                style={styles.logoImage}
                            />
                        </View>

                        {/* Title */}
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>
                                Create New Account
                            </Text>
                        </View>
                    </View>

                    {/* Form */}
                    <View style={styles.formContainer}>
                        <InputCustom
                            value={credentials.email}
                            onChangeText={(e) =>
                                setCredentials({
                                    ...credentials,
                                    email: e,
                                })
                            }
                            placeholder="Email"
                            leftIcon={<EmailIcon />}
                        />
                        <View style={styles.forgotText} />
                        <InputCustom
                            value={credentials.password}
                            onChangeText={(e) =>
                                setCredentials({
                                    ...credentials,
                                    password: e,
                                })
                            }
                            placeholder="Password"
                            secure={true}
                        />
                        <CheckBox
                            checked={checked}
                            onPress={() => setChecked(!checked)}
                            title="Remember me"
                            textStyle={styles.textBox}
                            wrapperStyle={styles.checkBox}
                            uncheckedColor={styles.checkColor.color}
                            containerStyle={styles.checkContainer}
                        />
                    </View>

                    {/* Button */}
                    <Button
                        style={styles.button}
                        containerStyle={styles.buttonContainer}
                        title={'Sign up'}
                        buttonStyle={styles.buttonStyle}
                        titleStyle={styles.buttonTitle}
                        onPress={() => {
                            console.log(credentials);
                        }}
                    />

                    {/* Line */}
                    <View style={styles.orContainer}>
                        <View style={styles.line} />
                        <Text style={styles.orText}>or coutinue with</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Social Button */}
                    <View style={styles.socialContainer}>
                        {/* Facebook */}
                        <TouchableOpacity style={styles.socialItemStyle}>
                            <FacebookIcon />
                        </TouchableOpacity>
                        {/* Google */}
                        <TouchableOpacity style={styles.socialItemStyle}>
                            <GoogleIcon />
                        </TouchableOpacity>
                        {/* Linked */}
                        <TouchableOpacity style={styles.socialItemStyle}>
                            <LinkEdinIcon />
                        </TouchableOpacity>
                    </View>

                    {/* Sign up */}
                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                NavigationService.navigate(routes.SIGN_IN);
                            }}
                        >
                            <Text style={styles.signUpButton}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};
export default CreateAccount;
