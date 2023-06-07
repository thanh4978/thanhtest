import { Headers, MenuProfile, StyledText } from '@/components/customs';
import { authentication } from '@/core';
import React, { FunctionComponent } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getAuthEnableBiometric } from '@/redux/selectors';
import { AuthActions } from '@/redux/reducers';
import { menuTypes, routes } from '@/constants';
import useStyles from './styles';
import UserAvatar from './UserAvatar';
import { ReactNativeIcon, SettingIcon } from '@/assets';
import { NavigationService } from '@/navigation/NavigationService';

const credentials = {
    username: 'tvhoai241223@gmail.com',
    password: 'admin',
};

const Profile: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const styles = useStyles();
    const enableBiometric = useAppSelector(getAuthEnableBiometric);

    const handleChangeBiometric = async () => {
        // enabled biometric => disable biometric
        if (enableBiometric) {
            // remove biometric
            await authentication.removeCredentials();
            dispatch(AuthActions.toggleBiometric());
        } else {
            // disabled biometric => enabled biometric
            await authentication.saveCredentials(credentials);
            dispatch(AuthActions.toggleBiometric());
        }
    };

    const onPressItem = (e: string) => {
        // NavigationService.navigate(e)
       console.log(e.toString());
       
    };

    return (
        <View style={styles.container}>
            <Headers
                title="Profile"
                leftIcon={<ReactNativeIcon />}
                rightIcon={<SettingIcon />}
                style={styles.headers}
                titleStyle={styles.title}
                onPressRightIcon={() =>
                    NavigationService.navigate(routes.SETTING)
                }
            />
            <FlatList
                ListHeaderComponent={<UserAvatar />}
                data={menuTypes}
                renderItem={({ item }) => (
                    <MenuProfile data={item} onPressItem={onPressItem} />
                )}
                keyExtractor={(item) => item._id.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListFooterComponent={() => (
                    <TouchableOpacity activeOpacity={0.8}>
                        <StyledText
                            style={styles.footerMenu}
                            fontWeight="medium"
                        >
                            Add Custom Section
                        </StyledText>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.containerMenu}
            />
        </View>
    );
};

export default Profile;
