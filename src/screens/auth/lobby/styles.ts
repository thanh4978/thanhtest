import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    body: {
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: normalize(15),
    },
    logoImage: {
        width: normalize(200),
        height: normalize(200),
        borderRadius: normalize(100),
    },
    titleContainer: {
        marginVertical: normalize(20),
        alignItems: 'center',
    },
    titleText: {
        fontSize: normalize(34),
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginHorizontal: normalize(50),
        paddingVertical: normalize(10),
        borderRadius: normalize(10),
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: normalize(15),
        borderColor: colors.grey5,
    },
    socialIcon: {
        marginEnd: normalize(10),
    },
    socialText: {
        fontSize: normalize(14),
        fontWeight: '600',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: normalize(26),
    },
    orText: {
        paddingHorizontal: normalize(10),
        fontSize: normalize(12),
        fontWeight: '600',
    },
    line: {
        height: normalize(1),
        width: '40%',
        backgroundColor: colors.grey5,
    },
    buttonContainer: {
        paddingHorizontal: normalize(20),
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
}));

export default useStyles;
