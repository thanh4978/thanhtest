import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    container: {
        borderRadius: normalize(16),
        borderWidth: 1,
        borderColor: colors.disabled,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: normalize(10),
    },
    touchTitleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    logoContainer: {
        padding: normalize(10),
        borderRadius: normalize(16),
        borderWidth: 1,
        borderColor: colors.disabled,
    },
    titleContainer: {
        paddingStart: normalize(14),
        paddingEnd: normalize(10),
        gap: normalize(5),
    },
    locationContainer: {
        alignSelf: 'flex-start',
        padding: normalize(10),
    },
    nameJobStyle: {
        fontSize: normalize(16),
    },
    nameCompanyStyle: {
        fontSize: normalize(14),
    },
    line: {
        height: normalize(1),
        marginHorizontal: normalize(12),
        backgroundColor: colors.disabled,
    },
    detailContainer: {
        marginStart: normalize(78),
        paddingVertical: normalize(14),
        gap: normalize(10),
    },
    detailAddress: {
        color: colors.grey2,
    },
    detailSalary: {
        color: colors.primary,
    },
    flexView: {
        flex: 1,
    },
    logoStyle: {
        width: normalize(32),
        height: normalize(32),
    },
    containerTags: {
        flexDirection: 'row',
        paddingEnd: normalize(10),
    },
    itemTagsStyle: {
        marginEnd: normalize(10),
    },
}));

export default useStyles;
