import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Linking, Platform } from 'react-native';
import PushNotification, { Importance } from 'react-native-push-notification';

const openDeepLink = (deepLink: string) => {
    Linking.canOpenURL(deepLink)
        .then((supported) => {
            if (supported) {
                // open the deep link
                Linking.openURL(deepLink);
            } else {
                console.log(`Cannot handle deep link`);
            }
        })
        .catch((e) => console.log('[Error open link] ', e));
};

messaging().setBackgroundMessageHandler(async () => {
    console.log('Register event ReactNativeFirebaseMessagingHeadlessTask ');
});

PushNotification?.createChannel(
    {
        channelId: 'notification-channel-id',
        channelName: 'FJob Manager',
        soundName: 'sound_noti.wav',
        importance: Importance.HIGH,
        vibrate: true,
    },
    (created) => {
        console.log('notification-channel-id: ', created);
    }
);

PushNotification.configure({
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
});

export const useFcm = () => {
    const requestPermission = async () => {
        try {
            const authStatus = await messaging().requestPermission();
            if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
                console.log('Permission status:', authStatus);
            } else if (
                authStatus === messaging.AuthorizationStatus.PROVISIONAL
            ) {
                console.log('Permission status:', authStatus);
            } else {
                console.log('Permission status:', authStatus);
            }
        } catch (error) {
            console.log('[Error requestPermission] ', error);
        }
    };

    const getDeviceToken = async () => {
        const deviceToken = await messaging().getToken();
        console.log('deviceToken: ', deviceToken);
        return deviceToken;
    };

    useEffect(() => {
        const unsubscribe = messaging().onMessage(
            async (remoteMessage: any) => {
                if (Platform.OS === 'ios') {
                    // toast with remoteMessage.notification?.title and remoteMessage.notification?.body
                }

                PushNotification.localNotification({
                    channelId: 'notification-channel-id',
                    channelName: 'FJob Manager',
                    title:
                        remoteMessage.notification?.title ||
                        remoteMessage.data.title ||
                        '',
                    bigText:
                        remoteMessage.notification?.body ||
                        remoteMessage.data.body ||
                        '', //content for Android
                    message:
                        remoteMessage.notification?.body ||
                        remoteMessage.data.body ||
                        '', //content for Ios
                    playSound: true,
                    soundName: 'sound_noti.wav',
                    priority: 'high',
                    ...remoteMessage,
                });
            }
        );

        //When the application is running, but in the background.
        messaging().onNotificationOpenedApp((remoteMessage) => {
            remoteMessage?.data?.deeplink &&
                openDeepLink(remoteMessage.data.deeplink);
        });

        //When the application is opened from a quit state.
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                if (remoteMessage) {
                    remoteMessage?.data?.deeplink &&
                        openDeepLink(remoteMessage.data.deeplink);
                }
            });

        return unsubscribe;
    }, []);

    return { requestPermission, getDeviceToken };
};
