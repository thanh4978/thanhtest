import React from 'react';
import { Tag } from '@/components/customs';
import useStyles from './styles';
import { TagStatusProps, TagStatusValues } from './type';

const TagStatus: React.FunctionComponent<TagStatusProps> = (props) => {
    const styles = useStyles();
    switch (props.data) {
        case TagStatusValues.SENT:
            return (
                <Tag
                    title="Application Sent"
                    style={styles.tagStylesS}
                    titleStyle={styles.tagTitleS}
                />
            );
        case TagStatusValues.ACCEPTED:
            return (
                <Tag
                    title="Application Accepted"
                    style={styles.tagStylesA}
                    titleStyle={styles.tagTitleA}
                />
            );
        case TagStatusValues.REJECTED:
            return (
                <Tag
                    title="Application Rejected"
                    style={styles.tagStylesR}
                    titleStyle={styles.tagTitleR}
                />
            );
        case TagStatusValues.PENDING:
            return (
                <Tag
                    title="Application Pending"
                    style={styles.tagStylesP}
                    titleStyle={styles.tagTitleP}
                />
            );
        default:
            return (
                <Tag
                    title="Application Sent"
                    style={styles.tagStylesS}
                    titleStyle={styles.tagTitleS}
                />
            );
    }
};

export default TagStatus;
