import { StyleSheet } from 'react-native';

import { Device } from '@/utils';

const SIZE = Device.getDeviceWidth() / 4;

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    container: {
        height: SIZE,
        width: SIZE,
        borderRadius: SIZE / 2,
        borderColor: '#FFF',
        position: 'absolute',
        backgroundColor: 'rgba(256, 256, 256, 0.6)',
        // elevation: 2,
    },
    pointer: {
        height: SIZE,
        width: SIZE,
        borderRadius: SIZE / 2,
        position: 'absolute',
        borderColor: '#FFF',
        backgroundColor: 'rgba(256, 256, 256, 0.6)',
    },
});

export default styles;
