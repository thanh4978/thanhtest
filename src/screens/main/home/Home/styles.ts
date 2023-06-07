import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    bigtitle: {
        fontSize: normalize(16),
        color: colors.grey5,
        fontFamily: 'Urbanist-VariableFont_wght',
    },
    smalltitle: {
        fontSize: normalize(20),
        color: colors.black,
    },
    avatarContainer: {
        padding: normalize(14),
    },
    bannerContainer: {
        alignItems: 'center',
        marginTop: normalize(16),
    },
    banner: {
        width: normalize(350),
        height: normalize(180),
        borderRadius: normalize(16),
    },
    rightAvatarIcon: {
        padding: normalize(10),
        borderWidth: 0,
    },
}));

export default useStyles;
