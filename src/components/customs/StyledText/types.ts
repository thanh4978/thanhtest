import { StyleProp, TextStyle } from 'react-native';

export type FontWeight = 'bold' | 'regular' | 'thin' | 'variable' | 'medium';
export interface StyledTextProps {
    fontWeight?: FontWeight;
    style?: StyleProp<TextStyle>;
    children?: React.ReactNode;
}
