import { ViewProps } from 'react-native';
import { ImageSourcePropType, TextStyle } from 'react-native';
import { FontWeight } from '../StyledText/types';

export type AvatarProps = {
    bigTitle?: string;
    smallTitle?: string;
    source?: ImageSourcePropType | undefined;
    rightIcon?: React.ReactNode;
    rightIconPress?: () => void;
    bigTitleStyle?: TextStyle;
    smallTitleStyle?: TextStyle;
    containerStyle?: ViewProps['style'];
    contentContainerStyle?: ViewProps['style'];
    bigWeight?: FontWeight;
    smallWeight?: FontWeight;
};
