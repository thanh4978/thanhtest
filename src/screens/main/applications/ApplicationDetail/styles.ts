import { Device } from '@/utils';
import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    jobTitleStyle: {
        marginHorizontal: normalize(14),
        marginVertical: normalize(16),
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
    containerStatus: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: normalize(20),
    },
    title: {
        fontSize: normalize(16),
    },
    tagContainer: {
        width: '80%',
        paddingVertical: normalize(10),
    },
    tagTitle: {
        fontSize: normalize(18),
    },
    titleHeader: {
        fontSize: normalize(20),
    },
    header: {},
}));

export default useStyles;
