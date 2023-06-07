import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
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
    seeAllTitle: {
        fontSize: normalize(14),
        color: colors.primary,
    },
    containerRecommenJob: {
        paddingHorizontal: normalize(14),
    },
    separator: {
        paddingHorizontal: normalize(10),
    },
}));

export default useStyles;
