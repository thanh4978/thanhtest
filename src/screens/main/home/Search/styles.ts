import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    containerSearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: normalize(14),
        marginTop: normalize(14),
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
    backIcon: {
        width: normalize(30),
        height: normalize(30),
        justifyContent: 'center',
    },
    inputContainer: {
        paddingEnd: normalize(30),
    },
}));

export default useStyles;
