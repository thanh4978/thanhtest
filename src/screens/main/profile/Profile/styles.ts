import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: normalize(10),
        justifyContent: 'space-between',
    },

    headerContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: normalize(16),
        borderBottomWidth: normalize(1),
        borderBottomColor: colors.grey5,
        paddingVertical: normalize(12),
    },
    separator: {
        paddingVertical: normalize(6),
    },
    containerMenu: {
        paddingBottom: normalize(20),
        paddingHorizontal: normalize(14),
    },
    footerMenu: {
        textAlign: 'center',
        paddingTop: normalize(14),
        fontSize: normalize(16),
        color: colors.primary,
    },
    headers: {},
    title: {
        fontSize: normalize(20),
    },
}));

export default useStyles;
