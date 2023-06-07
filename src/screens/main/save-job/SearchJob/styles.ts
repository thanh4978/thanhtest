import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    containerBookmarkJob: {
        paddingHorizontal: normalize(14),
        paddingVertical: normalize(14),
    },
    separator: {
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10),
    },
}));
export default useStyles;
