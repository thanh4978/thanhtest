import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { Headers, InputCustom } from '@/components/customs';
import { BackIcon } from '@/assets';
import { NavigationService } from '@/navigation/NavigationService';
import { Button, Image } from '@rneui/themed';
import { useAppSelector } from '@/hooks';
import { getAuthUser } from '@/redux/selectors';
import { User } from '@/redux/types';
import IsGoogleLogin from './IsGoogleLogin';
import { Asset } from 'react-native-image-picker';

const EditProfile: FunctionComponent = () => {
    const styles = useStyles();
    const user = useAppSelector(getAuthUser);
    const [formUser, setFormUser] = React.useState<User>({
        ...user,
    });
    const [captureImage, setCaptureImage] = React.useState<Asset[]>([{}]);
    const captureImageFunc = (asset: Asset | undefined) => {
        if (asset === undefined) return;
        if (asset.uri) {
            setCaptureImage([asset]);
        } else {
            console.log('no image');
        }
    };

    React.useEffect(() => {
        console.log('captureImage', captureImage);
    }, [captureImage]);

    return (
        <View style={styles.container}>
            <Headers
                title="Profile"
                leftIcon={<BackIcon />}
                onPressLeftIcon={() => NavigationService.goBack()}
            />

            <View style={styles.avatarContainer}>
                {user?.photo && (
                    <Image
                        source={{ uri: user?.photo }}
                        style={styles.avatarStyle}
                    />
                )}
                <IsGoogleLogin captureImage={captureImageFunc} />
            </View>
            <View style={styles.line} />

            {/* Form */}
            <View style={styles.form}>
                <InputCustom
                    label="First Name"
                    labelStyle={styles.labelTitle}
                    placeholder="First Name"
                    defaultValue={formUser?.givenName || ''}
                />
                <InputCustom
                    label="Middle Name"
                    labelStyle={styles.labelTitle}
                    placeholder="Middle Name"
                    defaultValue={formUser?.familyName || ''}
                />
                <InputCustom
                    label="Email"
                    labelStyle={styles.labelTitle}
                    placeholder="Email"
                    defaultValue={formUser?.email || ''}
                />
                <InputCustom
                    label="Current Position"
                    labelStyle={styles.labelTitle}
                    placeholder="Current Position"
                />
            </View>
            <View style={styles.containerButton}>
                <Button
                    style={styles.button}
                    containerStyle={styles.buttonContainer}
                    title={'Save'}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitle}
                    activeOpacity={0.5}
                />
            </View>
        </View>
    );
};

export default EditProfile;
