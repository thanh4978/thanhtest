import { View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { JobTitleProps } from './types';
import useStyles from './styles';
import { images } from '@/assets';
import StyledText from '../StyledText';
import Tag from '../Tag';
import { Image } from '@rneui/themed';
import { JobType } from '@/types';

const JobTitle: FunctionComponent<JobTitleProps> = (props) => {
    const {
        _id,
        address,
        category,
        logo,
        nameCompany,
        nameJob,
        salary,
    }: JobType = props.data;
    const styles = useStyles();
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.containerHeader}>
                <View style={styles.containerImage}>
                    <Image
                        source={{ uri: logo || images.lobby_logo }}
                        style={styles.logoStyle}
                    />
                </View>
                <StyledText style={styles.nameJobStyle} fontWeight="bold">
                    {nameJob}
                </StyledText>
                <StyledText style={styles.nameCompanyStyle} fontWeight="medium">
                    {nameCompany}
                </StyledText>
            </View>
            {/* Line */}
            <View style={styles.line} />

            <View style={styles.containerFooter}>
                <StyledText style={styles.addressStyle}>{address}</StyledText>
                <StyledText style={styles.salaryStyle} fontWeight="medium">
                    {salary}
                </StyledText>

                <View style={styles.tagContainer}>
                    {category.map((item, index) => {
                        if (index > 2) return;
                        return (
                            <Tag
                                title={item}
                                key={index}
                                style={styles.tagStyle}
                            />
                        );
                    })}
                </View>
                <StyledText style={styles.timeStyle}>
                    Posted 10 days ago, ends in 31 Dec
                </StyledText>
            </View>
        </View>
    );
};

export default JobTitle;
