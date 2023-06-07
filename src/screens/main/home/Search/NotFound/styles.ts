import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    containerErrorPage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: normalize(100),
    },
    imageError: {
        width: normalize(200),
        height: normalize(200),
    },
    textError: {
        textAlign: 'center',
        paddingHorizontal: normalize(50),
    },
    titleError: {
        fontSize: normalize(20),
        paddingVertical: normalize(10),
    },
}));

export default useStyles;
