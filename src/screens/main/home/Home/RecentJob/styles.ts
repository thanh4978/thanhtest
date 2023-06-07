import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        paddingStart: normalize(20),
        paddingEnd: normalize(20),
        flex: 1,
    },
    containerList: {
        paddingHorizontal: normalize(14),
    },
    recentContainerStyle: {
        paddingVertical: normalize(6),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(20),
        borderWidth: normalize(2),
        borderColor: colors.primary,
        marginEnd: normalize(12),
    },
    recentContainerFocus: {
        backgroundColor: colors.primary,
    },
    recentContainerUnFocus: {
        backgroundColor: colors.background,
    },
    recentTitleStyle: {
        fontSize: normalize(14),
    },
    recentTitleFocus: {
        color: colors.white,
    },
    recentTitleUnFocus: {
        color: colors.primary,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: normalize(14),
        marginVertical: normalize(14),
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: normalize(16),
    },
    seeAllTitle: {
        fontSize: normalize(14),
        color: colors.primary,
    },
    containerRecommenJob: {
        paddingHorizontal: normalize(14),
        paddingVertical: normalize(14),
    },
    separator: {
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10),
    },
}));

export default useStyles;
