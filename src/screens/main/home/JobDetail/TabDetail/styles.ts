import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    containerList: {
        paddingHorizontal: normalize(14),
    },
    detailContainer: {
        marginVertical: normalize(4),
    },
    detailContainerFocus: {
        borderBottomWidth: normalize(2),
        borderColor: colors.primary,
    },
    detailContainerUnFocus: {
        backgroundColor: colors.background,
        borderBottomWidth: normalize(2),
        borderColor: colors.grey3,
    },
    detailTitleStyle: {
        fontSize: normalize(16),
        paddingHorizontal: normalize(12),
        paddingBottom: normalize(6),
        textAlign: 'center',
    },
    detailTitleStyleFocus: {
        color: colors.primary,
    },
    detailTitleStyleUnFocus: {
        color: colors.grey3,
    },
}));

export default useStyles;
