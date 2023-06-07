import { Provider } from 'react-redux';
import React, { FunctionComponent, useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFcm } from '@/hooks';
import { ThemeContext } from '@/contexts';
import { Alert } from '@/components/customs';
import { Loading, UpgradeVersion } from '@/components/shared';
import { persistor, store } from '@/redux/store';
import RootNavigation from '@/navigation/RootNavigation';

const App: FunctionComponent = () => {
    const { requestPermission, getDeviceToken } = useFcm();

    useEffect(() => {
        requestPermission();
        PushNotification.setApplicationIconBadgeNumber(0);
        getDeviceToken();
    }, [requestPermission]);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider
                    initialMetrics={{
                        frame: { x: 0, y: 0, width: 0, height: 0 },
                        insets: { top: 0, left: 0, right: 0, bottom: 0 },
                    }}
                >
                    <ThemeContext>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            {/* ALERT */}
                            <Alert />

                            {/* LOADING API */}
                            <Loading />

                            {/* MAIN APP */}
                            <RootNavigation />

                            {/* Modal progressing when upgrade version of app */}
                            <UpgradeVersion />
                        </GestureHandlerRootView>
                    </ThemeContext>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
