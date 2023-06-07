import { View } from 'react-native';
import React from 'react';
import { StyledText } from '@/components/customs';
import useStyles from './styles';

const Messages = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <StyledText>Messages</StyledText>
        </View>
    );
};

export default Messages;
