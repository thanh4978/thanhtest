import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        marginBottom: 0,
        marginHorizontal: 0,
        marginTop: normalize(80),
        borderTopStartRadius: normalize(20),
        borderTopEndRadius: normalize(20),
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
    },
}));

export default useStyles;
