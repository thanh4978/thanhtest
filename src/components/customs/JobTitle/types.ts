import { JobType } from '@/types';
import { ViewStyle, StyleProp } from 'react-native';

export type JobTitleProps = {
    data: JobType;
    style?: StyleProp<ViewStyle>;
};
