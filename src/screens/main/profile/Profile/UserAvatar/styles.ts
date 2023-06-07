import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    bigTitleStyle: {
        fontSize: normalize(18),
        color: colors.black,
    },
    smallTitleStyle: {
        fontSize: normalize(16),
        color: colors.grey2,
    },
    rightIconStyle: {
        borderWidth: 0,
    },
    line: {
        height: normalize(1),
        backgroundColor: colors.grey5,
        marginVertical: normalize(20),
    },
    containerStyle: {
        paddingTop: normalize(10),
    },
}));

export default useStyles;
