import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({}) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: normalize(7),
    },
    backIcon: {
        padding: normalize(14),
    },
    bookMark: {
        padding: normalize(14),
    },
    sendIcon: {
        padding: normalize(14),
    },
    flex: {
        flex: 1,
    },
}));

export default useStyles;
