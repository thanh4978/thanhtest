import { View } from 'react-native';
import React from 'react';
import { Image } from '@rneui/themed';
import { images } from '@/assets';
import { StyledText } from '@/components/customs';
import useStyles from './styles';

const NotFound: React.FunctionComponent = () => {
    const styles = useStyles();
    return (
        <View style={styles.containerErrorPage}>
            <Image source={images.error} style={styles.imageError} />
            <StyledText fontWeight="bold" style={styles.titleError}>
                Not Found
            </StyledText>
            <StyledText fontWeight="medium" style={styles.textError}>
                Sorry, the keyword you entered cannot be found, please check
                again or search with another keyword
            </StyledText>
        </View>
    );
};

export default NotFound;
