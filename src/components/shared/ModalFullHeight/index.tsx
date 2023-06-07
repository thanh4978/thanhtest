import { useBackHandler } from '@/hooks';
import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import useStyles from './styles';

type ModalFullHeightProps = Partial<ModalProps> & {
    isVisible: boolean;
    marginTop?: number;
    onRequestClose?: () => void;
};

const ModalFullHeight: FunctionComponent<ModalFullHeightProps> = (props) => {
    const {
        isVisible,
        children,
        marginTop,
        onRequestClose = () => {},
        style,
        ...rest
    } = props;
    const styles = useStyles();

    useBackHandler({
        enabled: isVisible,
        callback: onRequestClose,
    });

    return (
        <Modal
            isVisible={isVisible}
            presentationStyle="overFullScreen"
            style={[styles.container, style]}
            {...rest}
            useNativeDriver
            animationInTiming={500}
            animationOut={'slideOutDown'}
            animationOutTiming={500}
            animationIn={'slideInUp'}
        >
            <View style={styles.content}>{children}</View>
        </Modal>
    );
};

export default ModalFullHeight;
