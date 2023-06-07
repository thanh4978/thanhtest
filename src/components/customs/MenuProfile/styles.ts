import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        borderColor: colors.grey4,
        borderWidth: normalize(1),
        borderRadius: normalize(22),
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(14),
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        marginLeft: normalize(8),
    },
}));

export default useStyles;
