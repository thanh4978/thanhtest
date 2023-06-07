import { Device } from '@/utils';
import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    jobTitleStyle: {
        marginHorizontal: normalize(14),
        marginVertical: normalize(7),
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
    modalWrapper: {
        alignItems: 'center',
        borderRadius: 99,
    },
    modal: {
        borderTopEndRadius: normalize(40),
        borderTopLeftRadius: normalize(40),
    },
    textModal: {
        fontSize: normalize(20),
        paddingVertical: normalize(40),
    },
    buttonWrapper: {
        flexDirection: 'row',
        paddingBottom: normalize(20),
        marginHorizontal: normalize(20),
    },
    buttonApplyCVStyle: {
        backgroundColor: colors.secondary,
        width: normalize(180),
        borderRadius: normalize(99),
        paddingVertical: normalize(14),
    },
    titleApplyCV: {
        color: colors.primary,
    },
    buttonApplyPFStyle: {
        backgroundColor: colors.primary,
        width: normalize(180),
        borderRadius: normalize(99),
        paddingVertical: normalize(14),
    },
    titleApplyPF: {},
}));

export default useStyles;
