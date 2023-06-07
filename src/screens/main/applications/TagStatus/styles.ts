import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    tagStylesS: {
        width: normalize(160),
        alignItems: 'center',
        backgroundColor: '#eef4ff',
        borderWidth: 0,
    },
    tagTitleS: {
        color: colors.primary,
    },
    tagStylesA: {
        width: normalize(160),
        alignItems: 'center',
        backgroundColor: '#e9fbef',
        borderWidth: 0,
    },
    tagTitleA: {
        color: '#08be75',
    },
    tagStylesR: {
        width: normalize(160),
        alignItems: 'center',
        backgroundColor: '#feeaea',
        borderWidth: 0,
    },
    tagTitleR: {
        color: '#f75656',
    },
    tagStylesP: {
        width: normalize(160),
        alignItems: 'center',
        backgroundColor: '#fef8e3',
        borderWidth: 0,
    },
    tagTitleP: {
        color: '#fbca17',
    },
}));

export default useStyles;
