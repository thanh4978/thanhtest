import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        marginVertical: normalize(8),
        paddingHorizontal: normalize(14),
    },
    containerContent: {
        width: '100%',
        height: normalize(270),
        paddingBottom: normalize(80),
    },
    title: {
        fontSize: normalize(18),
        paddingBottom: normalize(4),
    },
    contentStyle: {
        fontSize: normalize(12),
    },
}));

export default useStyles;
