import { View } from 'react-native';
import React from 'react';
import { JobProps } from './types';
import useStyles from './styles';
import StyledText from '../StyledText';
import { BookmarkIcon, GoogleIcon } from '@/assets';
import { TouchableOpacity } from 'react-native';
import { Image } from '@rneui/themed';
import { JobType } from '@/types';
import Tag from '../Tag';

const Job: React.FunctionComponent<JobProps> = (props) => {
    const styles = useStyles();
    const {
        _id,
        logo,
        nameJob,
        nameCompany,
        address,
        category,
        salary,
    }: JobType = props?.data;

    return (
        <View style={[styles.container, props.style]}>
            {/* Top Content */}
            <View style={styles.infoContainer}>
                {/* Icon Company */}
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={props.pressIcon}>
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
                    </TouchableOpacity>
                </View>

                {/* Title Content */}
                <TouchableOpacity
                    style={styles.touchTitleContainer}
                    onPress={props.pressTitle}
                >
                    <View style={styles.titleContainer}>
                        <StyledText
                            fontWeight="bold"
                            style={styles.nameJobStyle}
                            numberOfLines={1}
                        >
                            {nameJob}
                        </StyledText>
                        <StyledText
                            fontWeight="medium"
                            style={styles.nameCompanyStyle}
                            numberOfLines={1}
                        >
                            {nameCompany}
                        </StyledText>
                    </View>
                </TouchableOpacity>

                <View style={styles.flexView} />

                {/* Bookmark Icon */}
                <View style={styles.locationContainer}>
                    <TouchableOpacity onPress={props.pressLocation}>
                        <BookmarkIcon />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Line */}
            <View style={styles.line} />

            {/* Bottom Content */}
            <View style={styles.detailContainer}>
                <StyledText style={styles.detailAddress} numberOfLines={1}>
                    {address}
                </StyledText>
                <StyledText
                    style={styles.detailSalary}
                    numberOfLines={1}
                    fontWeight="medium"
                >
                    {salary}
                </StyledText>
                <View style={styles.containerTags}>
                    {category.map((item, index) => {
                        if (index > 1) return;
                        return (
                            <Tag
                                key={index}
                                title={item}
                                style={styles.itemTagsStyle}
                            />
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export default Job;
