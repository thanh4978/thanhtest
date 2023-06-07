import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: normalize(20),
    },
    header: {},
}));

export default useStyles;
