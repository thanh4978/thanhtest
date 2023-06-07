import { StyleSheet } from 'react-native';

const SIZE = 32;
const PROGRESS = 20;

const styles = StyleSheet.create({
    track: {
        width: SIZE + PROGRESS,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: 'white',
    },
    thumb: {
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: '#CCCCCC',
    },
});

export default styles;
