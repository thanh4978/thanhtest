import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    containerApplicationJob: {
        paddingHorizontal: normalize(14),
        paddingVertical: normalize(14),
    },
    separator: {
        height: normalize(1),
        marginHorizontal: normalize(12),
        backgroundColor: colors.disabled,
        marginVertical: normalize(20),
    },
}));
export default useStyles;
