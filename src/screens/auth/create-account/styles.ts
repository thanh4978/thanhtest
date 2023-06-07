import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    body: {
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
    },
    logoContainer: {
        marginTop: normalize(30),
    },
    logoImage: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: normalize(100),
    },
    titleContainer: {
        marginVertical: normalize(30),
        alignItems: 'center',
    },
    titleText: {
        fontSize: normalize(24),
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    formContainer: {
        paddingHorizontal: normalize(4),
    },
    checkContainer: {
        width: '40%',
        alignSelf: 'center',
    },
    checkBox: {
        alignSelf: 'center',
    },
    textBox: {
        color: colors.black,
    },
    checkColor: {
        color: colors.primary,
    },
    buttonContainer: {
        paddingHorizontal: normalize(20),
        marginVertical: normalize(20),
    },
    buttonStyle: {
        borderRadius: 99,
        paddingVertical: normalize(14),
    },
    buttonTitle: {
        fontSize: normalize(13),
    },
    button: {
        backgroundColor: colors.primary,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: normalize(26),
        alignSelf: 'center',
    },
    orText: {
        paddingHorizontal: normalize(10),
        fontSize: normalize(12),
        fontWeight: '600',
    },
    line: {
        height: normalize(1),
        width: '28%',
        backgroundColor: colors.grey5,
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        gap: normalize(24),
    },
    socialItemStyle: {
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(12),
        borderColor: colors.grey5,
        borderWidth: normalize(1),
    },
    signUpContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText: {
        color: colors.grey5,
        fontSize: normalize(12),
    },
    signUpButton: {
        color: colors.primary,
        fontSize: normalize(14),
        fontWeight: 'bold',
    },
    forgotText: {
        marginVertical: normalize(7),
    },
}));

export default useStyles;
