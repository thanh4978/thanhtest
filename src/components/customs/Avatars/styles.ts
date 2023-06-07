import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerContentStyle: {
        flex: 1,
        marginHorizontal: normalize(14),
    },
    headerIconRight: {
        borderRadius: normalize(99),
        borderWidth: normalize(1),
        width: normalize(40),
        height: normalize(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: normalize(20),
    },
}));

export default useStyles;
