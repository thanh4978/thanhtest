import { View } from 'react-native';
import React from 'react';
import { Headers, JobTitle, StyledText } from '@/components/customs';
import { useRoute } from '@react-navigation/native';
import { JobType } from '@/types';
import useStyles from './styles';
import { Button } from '@rneui/themed';
import { BackIcon } from '@/assets';
import TagStatus from '../TagStatus';
import { TagStatusValues } from '../TagStatus/type';
import { NavigationService } from '@/navigation/NavigationService';

interface RouteParams {
    data: JobType;
}

const ApplicationDetail: React.FunctionComponent<RouteParams> = () => {
    const styles = useStyles();
    const route = useRoute();
    const data = (route.params as RouteParams)?.data;
    return (
        <View style={styles.container}>
            {/* Header */}
            <Headers
                title="Application Stages"
                leftIcon={<BackIcon />}
                titleStyle={styles.titleHeader}
                style={styles.header}
                onPressLeftIcon={() => NavigationService.goBack()}
            />

            {/* Info Job */}
            <JobTitle data={data} style={styles.jobTitleStyle} />

            {/* Button Apply */}
            <View style={styles.containerButton}>
                <Button
                    style={styles.button}
                    containerStyle={styles.buttonContainer}
                    title={'Waiting...'}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitle}
                    activeOpacity={0.5}
                />
            </View>

            <View style={styles.containerStatus}>
                <StyledText style={styles.title}>
                    Your Applications Status
                </StyledText>
                <TagStatus
                    data={TagStatusValues.ACCEPTED}
                    style={styles.tagContainer}
                    titleStyle={styles.tagTitle}
                />
            </View>
        </View>
    );
};

export default ApplicationDetail;
