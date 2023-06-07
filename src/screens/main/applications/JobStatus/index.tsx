import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import useStyles from './styles';
import { ChevronRightIcon, GoogleIcon } from '@/assets';
import { StyledText } from '@/components/customs';
import { NavigationService } from '@/navigation/NavigationService';
import { routes } from '@/constants';
import { JobStatusType } from './types';
import { JobType } from '@/types';
import { Image } from '@rneui/themed';
import TagStatus from '../TagStatus';
import { TagStatusValues } from '../TagStatus/type';

const JobStatus: React.FunctionComponent<JobStatusType> = (props) => {
    const styles = useStyles();
    const { logo, nameCompany, nameJob }: JobType = props.data;
    const handleDetail = () => {
        NavigationService.navigate(routes.APPLICATION_DETAIL, {
            data: props.data,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={handleDetail}
            >
                <View style={styles.logoContainer}>
                    {logo ? (
                        <Image
                            source={{
                                uri:
                                    logo ||
                                    'https://blog.castle.io/content/images/2021/03/blog-thumb-1.png',
                            }}
                            style={styles.logoStyle}
                        />
                    ) : (
                        <GoogleIcon />
                    )}
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.titleContainer}
                onPress={handleDetail}
            >
                <StyledText
                    style={styles.nameJobStyle}
                    fontWeight="bold"
                    numberOfLines={1}
                >
                    {nameJob}
                </StyledText>
                <StyledText style={styles.nameCompanyStyle} numberOfLines={1}>
                    {nameCompany}
                </StyledText>
                <TagStatus data={TagStatusValues.ACCEPTED} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.locationContainer}
                onPress={handleDetail}
            >
                <ChevronRightIcon />
            </TouchableOpacity>
        </View>
    );
};

export default JobStatus;
