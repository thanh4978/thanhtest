import { useBackHandler } from '@/hooks';
import { makeStyles } from '@rneui/themed';
import React, { FunctionComponent } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';

interface ModalProps extends Partial<RNModalProps> {
    isVisible: boolean;
    onRequestClose?: () => void;
    contentStyle?: StyleProp<ViewStyle>;
}

const ModalWrapContent: FunctionComponent<ModalProps> = (props) => {
    const {
        isVisible,
        onRequestClose = () => {},
        children,
        contentStyle,
        style,
        ...rest
    } = props;
    const styles = useStyle();

    useBackHandler({
        enabled: isVisible,
        callback: onRequestClose,
    });

    return (
        <RNModal
            isVisible={isVisible}
            presentationStyle="overFullScreen"
            style={[style, { margin: 0 }]}
            {...rest}
            useNativeDriver
            animationInTiming={500}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
        >
            <View style={[styles.container, contentStyle]}>{children}</View>
        </RNModal>
    );
};

const useStyle = makeStyles(({ colors }) => ({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
    },
}));

export default ModalWrapContent;
