import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    buttonEdit: {
        position: 'absolute',
        right: normalize(20),
        bottom: 0,
        backgroundColor: colors.primary,
        padding: normalize(4),
        borderRadius: 9,
        zIndex: 1000,
    },
    modalContent: {
        borderTopEndRadius: normalize(20),
        borderTopStartRadius: normalize(20),
    },
    modalContainer: {
        paddingBottom: normalize(26),
        paddingHorizontal: normalize(26),
        paddingTop: normalize(16),
    },
    titleModal: {
        fontSize: normalize(18),
        paddingBottom: normalize(20),
    },
    iconModalWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(20),
    },
    icon: {
        width: normalize(70),
        height: normalize(50),
        alignItems: 'center',
    },
}));

export default useStyles;
