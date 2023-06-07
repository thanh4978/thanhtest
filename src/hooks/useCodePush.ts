import { useCallback, useEffect, useState } from 'react';
import CodePush, { DownloadProgress } from 'react-native-code-push';

export const useCodePush = () => {
    const [dataProgress, setDataProgress] = useState<DownloadProgress>({
        receivedBytes: 0,
        totalBytes: 0,
    });
    const [showUpgradeScreen, setShowUpgradeScreen] = useState(false);
    const [isFailed, setFailed] = useState(false);
    const [messenger, setMessenger] = useState('Upgrading is in progress');

    const codePushStatusDidChange = useCallback(
        (syncStatus: CodePush.SyncStatus) => {
            switch (syncStatus) {
                case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    setShowUpgradeScreen(true);
                    break;
                case CodePush.SyncStatus.UPDATE_INSTALLED:
                    restartApp();
                    break;
                case CodePush.SyncStatus.UNKNOWN_ERROR:
                    setFailed(true);
                    restartApp();
                    setMessenger(
                        'An unknown error occurred. Please try again later.'
                    );
                    break;
                default:
                    break;
            }
        },
        []
    );

    const codePushDownloadDidProgress = (progress: DownloadProgress) => {
        setDataProgress(progress);
    };

    const restartApp = () => {
        setShowUpgradeScreen(false);
        CodePush.restartApp();
    };

    const percentUpdated = Math.ceil(
        (dataProgress?.receivedBytes / dataProgress?.totalBytes) * 100
    );

    useEffect(() => {
        CodePush.sync({}, codePushStatusDidChange, codePushDownloadDidProgress);
    }, []);

    return {
        percentUpdated,
        restartApp,
        showUpgradeScreen,
        isFailed,
        messenger,
    };
};
