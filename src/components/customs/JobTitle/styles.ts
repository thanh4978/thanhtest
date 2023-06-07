import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        borderRadius: normalize(20),
        borderWidth: normalize(1),
        borderColor: colors.disabled,
        paddingHorizontal: normalize(14),
        paddingVertical: normalize(20),
        backgroundColor: colors.background,
    },
    containerHeader: {
        alignItems: 'center',
        gap: normalize(6),
    },
    containerFooter: {
        alignItems: 'center',
        gap: normalize(10),
    },
    containerImage: {
        padding: normalize(14),
        borderRadius: normalize(20),
        borderWidth: 1,
        borderColor: colors.disabled,
    },
    logoStyle: {
        width: normalize(60),
        height: normalize(60),
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameJobStyle: {
        fontSize: normalize(20),
    },
    nameCompanyStyle: {
        fontSize: normalize(16),
        color: colors.primary,
    },
    addressStyle: {
        fontSize: normalize(15),
    },
    salaryStyle: {
        fontSize: normalize(16),
        color: colors.primary,
    },
    timeStyle: {
        fontSize: normalize(14),
    },
    line: {
        height: normalize(1),
        backgroundColor: colors.grey4,
        marginVertical: normalize(14),
    },
    tagStyle: {
        margin: normalize(5),
    },
}));

export default useStyles;
