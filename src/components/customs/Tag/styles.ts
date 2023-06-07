import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        borderRadius: normalize(8),
        borderWidth: 1,
        borderColor: colors.grey3,
    },
    title: {
        color: colors.grey3,
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(4),
        fontSize: normalize(12),
    },
}));

export default useStyles;
