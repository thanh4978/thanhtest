import { Text as RNText, TextProps } from '@rneui/themed';
import React from 'react';
import styles from './styles';
import { FontWeight, StyledTextProps } from './types';

const StyledText: React.FunctionComponent<StyledTextProps & TextProps> = ({
    style,
    children,
    fontWeight = 'regular',
    ...props
}) => {
    let fontStyles = styles[fontWeight as FontWeight];
    return (
        <RNText style={[fontStyles, style]} {...props}>
            {children}
        </RNText>
    );
};

export default StyledText;
