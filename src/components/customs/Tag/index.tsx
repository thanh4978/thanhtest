import { View } from 'react-native';
import React from 'react';
import StyledText from '../StyledText';
import useStyles from './styles';
import { TagProps } from './types';

const Tag: React.FunctionComponent<TagProps> = (props) => {
    const styles = useStyles();

    return (
        <View style={[styles.container, props.style]}>
            <StyledText
                style={[styles.title, props.titleStyle]}
                fontWeight="medium"
            >
                {props.title || 'Tag'}
            </StyledText>
        </View>
    );
};

export default Tag;
