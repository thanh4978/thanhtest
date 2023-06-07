import { View } from 'react-native';
import React from 'react';
import useStyles from './styles';
import { StyledText } from '@/components/customs';
import Header from '@/components/customs/Headers';
import { BackIcon } from '@/assets';
import { NavigationService } from '@/navigation/NavigationService';
import TabNotification from './TabNotification';

const Notification = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Header
                leftIcon={<BackIcon />}
                title="Notification"
                onPressLeftIcon={() => NavigationService.goBack()}
            />
            <TabNotification />
        </View>
    );
};

export default Notification;
