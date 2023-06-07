import React, { FunctionComponent } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import useStyles from './styles';
import { StyledText } from '@/components/customs';
import { CameraIcon, EditProfileIcon, LibraryIcon } from '@/assets';

import { PERMISSION_TYPE, useAppSelector, usePermission } from '@/hooks';
import { ModalWrapContent } from '@/components/shared';
import {
    Asset,
    CameraOptions,
    ImageLibraryOptions,
    launchCamera,
    launchImageLibrary,
} from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { CustomToast } from '@/utils';
import { getAuthIsGoogle } from '@/redux/selectors';

type Props = {
    captureImage(asset: Asset): void;
};

const IsGoogleLogin: FunctionComponent<Props> = (props) => {
    const styles = useStyles();
    const permission = usePermission();
    const [visible, setVisible] = React.useState<boolean>(false);
    const isGoogleLogin = useAppSelector(getAuthIsGoogle);
    const [captureImage, setCaptureImage] = React.useState<Asset[]>([]);
    React.useEffect(() => {
        props.captureImage(captureImage[0]);
    }, [captureImage]);
    const optionsCamera: CameraOptions = {
        quality: 1,
        mediaType: 'photo',
        cameraType: 'front',
        saveToPhotos: true,
    };
    const optionLibrary: ImageLibraryOptions = {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 0,
        maxWidth: 500,
        maxHeight: 500,
    };
    //Permission camera
    const showCamera = async () => {
        request(
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.CAMERA
                : PERMISSIONS.ANDROID.CAMERA
        ).then(async (result) => {
            if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
                await permission.showPermissionDialog(PERMISSION_TYPE.camera);
            } else {
                const result = await launchCamera(optionsCamera);
                if (result.errorCode) {
                    CustomToast('Có lỗi xảy ra khi mở camera');
                } else if (result.didCancel) {
                    CustomToast('Bạn chưa chụp ảnh');
                } else if (result.errorMessage) {
                    CustomToast('Có lỗi xảy ra khi mở camera');
                } else if (result.assets) {
                    setCaptureImage(result.assets);
                }
            }
        });
        setVisible(!visible);
    };

    //Permission gallery
    const showGallery = async () => {
        request(
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.PHOTO_LIBRARY
                : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        ).then(async (result) => {
            if (result !== RESULTS.GRANTED && result !== RESULTS.UNAVAILABLE) {
                await permission.showPermissionDialog(PERMISSION_TYPE.library);
            } else {
                const result = await launchImageLibrary(optionLibrary);
                if (result.errorCode) {
                    CustomToast('Có lỗi xảy ra khi mở thư viện');
                } else if (result.didCancel) {
                    CustomToast('Bạn chưa chọn ảnh');
                } else if (result.errorMessage) {
                    CustomToast('Có lỗi xảy ra khi mở thư viện');
                } else if (result.assets) {
                    setCaptureImage(result.assets);
                }
            }
        });
        setVisible(!visible);
    };
    if (isGoogleLogin) {
        return <View />;
    }
    return (
        <>
            <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => setVisible(!visible)}
            >
                <EditProfileIcon />
            </TouchableOpacity>
            <ModalWrapContent
                isVisible={visible}
                onBackdropPress={() => setVisible(!visible)}
                contentStyle={styles.modalContent}
            >
                <View style={styles.modalContainer}>
                    <StyledText style={styles.titleModal} fontWeight="bold">
                        Choose a photo from:
                    </StyledText>
                    <View style={styles.iconModalWrapper}>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={showCamera}
                        >
                            <CameraIcon />
                            <StyledText>Camera</StyledText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={showGallery}
                        >
                            <LibraryIcon />
                            <StyledText>Library</StyledText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalWrapContent>
        </>
    );
};

export default IsGoogleLogin;
