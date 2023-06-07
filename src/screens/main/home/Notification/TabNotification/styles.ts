import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: normalize(14),
    },
    titleWrapper: {
        flex: 1,
    },
    titleStyle: {
        alignSelf: 'center',
        fontSize: normalize(16),
        color: colors.grey3,
        paddingBottom: normalize(10),
    },
    focusTab: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
    },
    focusTitle: {
        color: colors.primary,
    },
    unFocusTab: {
        borderBottomWidth: 2,
        borderBottomColor: colors.grey3,
    },
    unFocusTitle: {
        color: colors.grey3,
    },
}));

export default useStyles;
