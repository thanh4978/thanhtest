import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Headers, StyledText, Switch } from '@/components/customs';
import { BackIcon, EyeOnIcon, ExitIcon } from '@/assets';
import useStyles from './styles';
import { NavigationService } from '@/navigation/NavigationService';
import { Button, useThemeMode } from '@rneui/themed';
import { GoogleService, getMode } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { AuthActions } from '@/redux/reducers';
import { ModalWrapContent } from '@/components/shared';
import { ScrollView } from 'react-native-gesture-handler';
const Setting = () => {
    const styles = useStyles();
    const dispatch = useAppDispatch();
    const { mode, setMode } = useThemeMode();
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(getMode(mode));
    const [visible, setVisible] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (isDarkMode) {
            setMode('dark');
        } else {
            setMode('light');
        }
    }, [isDarkMode]);

    const handleLogout = async () => {
        await GoogleService.logout();
        dispatch(AuthActions.handleGoogleSignOut());
    };

    return (
        <View style={styles.container}>
            <Headers
                title="Settings"
                leftIcon={<BackIcon />}
                style={styles.headers}
                titleStyle={styles.title}
                onPressLeftIcon={() => NavigationService.goBack()}
            />
            <ScrollView>
                <View style={styles.wrapperBody}>
                    <View style={styles.container_progress}>
                        <View style={styles.progress_icon}>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <StyledText
                                style={styles.Profile_Completed}>
                                Profile Completed
                            </StyledText>

                            <StyledText
                                style={styles.Text_Profile_Completed}>
                                A complete profile increases the chances
                            </StyledText>

                            <StyledText
                                style={styles.Text_Profile_Completed}>
                                of a recruiter being more interested in
                            </StyledText>

                            <StyledText
                                style={styles.Text_Profile_Completed}>
                                recruiting you
                            </StyledText>
                        </View>
                    </View>
                    {/* Job Seeking Status */}
                    <View style={styles.container_gr_Item}>
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Job Seeking Status
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                    {/* Account */}
                    <View style={styles.container_gr_Item}>
                        {/* Title About */}
                        <View style={styles.containerItem}>
                            <StyledText style={styles.Title_gr_Item} >
                                Account
                            </StyledText>
                        </View>
                        {/* Personal Information */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Personal Information
                            </StyledText>
                        </TouchableOpacity>
                        {/* Linked Accounts */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Linked Accounts
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                    {/* General */}
                    <View style={styles.container_gr_Item}>
                        {/* Title General */}
                        <View style={styles.containerItem}>
                            <StyledText style={styles.Title_gr_Item} >
                                General
                            </StyledText>
                        </View>
                        {/* Notification */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Notification
                            </StyledText>
                        </TouchableOpacity>
                        {/* Application Issues */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Application Issues
                            </StyledText>
                        </TouchableOpacity>
                        {/*Timezone */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Timezone
                            </StyledText>
                        </TouchableOpacity>
                        {/* Security */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Security
                            </StyledText>
                        </TouchableOpacity>
                        {/* Language */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Language (English)
                            </StyledText>
                        </TouchableOpacity>
                        {/* dark theme */}
                        <View style={styles.containerItem}>
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText style={styles.titleItem} fontWeight="medium">
                                Dark Mode
                            </StyledText>
                            <Switch
                                value={isDarkMode}
                                onValueChange={() => setIsDarkMode(!isDarkMode)}
                            />
                        </View>
                        {/* Hepl Center */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Hepl Center
                            </StyledText>
                        </TouchableOpacity>
                        {/* Invite Friends */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Invite Friends
                            </StyledText>
                        </TouchableOpacity>
                        {/* Rate us */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Rate us
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                    {/* About */}
                    <View style={styles.container_gr_Item}>
                        {/* Title About */}
                        <View style={styles.containerItem}>
                            <StyledText style={styles.Title_gr_Item} >
                                Dark Mode
                            </StyledText>
                        </View>
                        {/* Privacy & Policy */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Privacy & Policy
                            </StyledText>
                        </TouchableOpacity>
                        {/* Terms of Services */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                Terms of Services
                            </StyledText>
                        </TouchableOpacity>
                        {/* About */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <EyeOnIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem]}
                                fontWeight="medium"
                            >
                                About
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                    {/* Job Seeking Status */}
                    <View style={styles.container_gr_Item}>                       
                        {/* Deactivate My Account */}
                        <TouchableOpacity
                            style={styles.containerItem}
                        // onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <ExitIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem, styles.titleItemRed]}
                                fontWeight="medium"
                            >
                                Deactivate My Account
                            </StyledText>
                        </TouchableOpacity>
                        {/* log out */}
                        <TouchableOpacity
                            style={styles.containerItem}
                            onPress={() => setVisible(!visible)}
                        >
                            <View style={styles.containerIcon}>
                                <ExitIcon />
                            </View>
                            <StyledText
                                style={[styles.titleItem, styles.titleItemRed]}
                                fontWeight="medium"
                            >
                                Logout
                            </StyledText>

                            <ModalWrapContent
                                isVisible={visible}
                                contentStyle={styles.modal}
                                onBackdropPress={() => setVisible(!visible)}
                            >
                                <View style={styles.modalWrapper}>
                                    <StyledText
                                        style={styles.textModal}
                                        fontWeight="bold"
                                    >
                                        Logout
                                    </StyledText>
                                    <StyledText style={styles.text} fontWeight="bold">
                                        Are you sure you want to log out?
                                    </StyledText>
                                    <View style={styles.buttonWrapper}>
                                        <Button
                                            title={'Cancel'}
                                            buttonStyle={styles.buttonLeft}
                                            containerStyle={styles.buttonStyle}
                                            onPress={() => setVisible(!visible)}
                                        />
                                        <View style={{ width: 10 }} />
                                        <Button
                                            title={'Yes, Logout'}
                                            buttonStyle={styles.buttonRight}
                                            titleStyle={styles.titleButton}
                                            containerStyle={styles.buttonStyle}
                                            onPress={handleLogout}
                                        />
                                    </View>
                                </View>
                            </ModalWrapContent>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>

        </View>
    );
};

export default Setting;
