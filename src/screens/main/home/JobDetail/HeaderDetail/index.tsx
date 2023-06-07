import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BackIcon, BookmarkBlackIcon, SendIcon } from '@/assets';
import useStyles from './styles';
import { NavigationService } from '@/navigation/NavigationService';
import Share, { ShareOptions } from 'react-native-share';
import { JobTitleProps } from '@/components/customs/JobTitle/types';

const HeaderDetail: React.FunctionComponent<JobTitleProps> = (props) => {
    // Share
    const share = React.useCallback(() => {
        const options: ShareOptions = {
            title: props.data.nameJob,
            message: props.data.nameCompany,
            url: props.data.logo,
        };
        Share.open(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.data]);

    const styles = useStyles();
    return (
        <View style={styles.container}>
            {/* Back Screen */}
            <TouchableOpacity
                style={styles.backIcon}
                onPress={() => NavigationService.goBack()}
            >
                <BackIcon />
            </TouchableOpacity>

            {/* Save to Bookmark */}
            <View style={styles.flex} />
            <TouchableOpacity style={styles.bookMark}>
                <BookmarkBlackIcon />
            </TouchableOpacity>

            {/* Share  */}
            <TouchableOpacity style={styles.sendIcon} onPress={share}>
                <SendIcon />
            </TouchableOpacity>
        </View>
    );
};

export default HeaderDetail;
