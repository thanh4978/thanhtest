import { Device } from '@/utils';
import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    avatarContainer: {
        alignSelf: 'center',
    },
    avatarStyle: {
        width: normalize(150),
        height: normalize(150),
        borderRadius: normalize(99),
    },
    line: {
        height: normalize(1),
        backgroundColor: colors.grey5,
        marginVertical: normalize(20),
        marginHorizontal: normalize(14),
    },
    form: {
        gap: normalize(30),
        paddingHorizontal: normalize(14),
    },
    labelTitle: {
        fontSize: normalize(14),
        color: colors.black,
        paddingBottom: normalize(10),
        fontWeight: 'normal',
    },
    buttonContainer: {
        paddingHorizontal: normalize(20),
        marginVertical: normalize(20),
    },
    buttonStyle: {
        borderRadius: 99,
        paddingVertical: normalize(14),
    },
    buttonTitle: {
        fontSize: normalize(13),
    },
    button: {
        backgroundColor: colors.primary,
    },
    containerButton: {
        position: 'absolute',
        bottom: 0,
        width: normalize(Device.getDeviceWidth()),
        alignSelf: 'center',
    },
}));

export default useStyles;
