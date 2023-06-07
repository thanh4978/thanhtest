import { makeStyles, normalize } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
    progress_icon:{
        backgroundColor: colors.warning, 
        width: normalize(85), 
        height: normalize(85), 
        marginRight: normalize(15), 
        borderRadius: normalize(40),

    },
    Text_Profile_Completed:{
        fontSize: normalize(12), 
        color: colors.disabled,
    },
    Profile_Completed:{
        marginBottom: normalize(10), 
        fontSize: normalize(20), 
        fontWeight: 'bold', 
        color: colors.disabled,
    },
    container_progress: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: normalize(15),
        borderRadius: normalize(25),
        marginBottom: normalize(25),
    },
    Title_gr_Item: {
        fontSize: normalize(12),
        flex: 1,
        paddingStart: normalize(8),
        marginBottom: normalize(15),
    },
    container_gr_Item: {      
        paddingBottom: normalize(20),
        paddingTop: normalize(20),
        borderTopWidth: normalize(1),      
        borderColor: colors.grey5,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    headers: {},
    title: {
        fontSize: normalize(20),
    },
    wrapperBody: {
        paddingHorizontal: normalize(14),
        gap: normalize(8),
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerIcon: {
        width: normalize(30),
        height: normalize(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleItem: {
        fontSize: normalize(16),
        flex: 1,
        paddingStart: normalize(8),
    },
    titleItemRed: {
        color: colors.error,
    },
    modalWrapper: {
        alignItems: 'center',
        borderRadius: 99,
    },
    modal: {
        borderTopEndRadius: normalize(40),
        borderTopLeftRadius: normalize(40),
    },
    textModal: {
        fontSize: normalize(20),
        paddingVertical: normalize(20),
        color: colors.error,
    },
    text: {
        color: colors.black,
        paddingVertical: normalize(20),
        fontSize: normalize(16),
    },
    buttonWrapper: {
        flexDirection: 'row',
        paddingBottom: normalize(20),
        marginHorizontal: normalize(20),
    },
    buttonRight: {
        backgroundColor: colors.secondary,
        width: normalize(180),
        paddingVertical: normalize(14),
    },
    titleButton: {
        color: colors.primary,
    },
    buttonLeft: {
        backgroundColor: colors.primary,
        width: normalize(180),
        paddingVertical: normalize(14),
    },
    buttonStyle: {
        borderRadius: normalize(99),
    },
    titleApplyPF: {},
}));

export default useStyles;
