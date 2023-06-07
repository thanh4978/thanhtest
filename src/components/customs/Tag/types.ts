import { TextStyle, ViewStyle, StyleProp } from 'react-native';

export type TagProps = {
    title: string;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
};
