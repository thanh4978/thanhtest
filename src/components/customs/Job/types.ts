import { JobType } from '@/types';
import { ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';

export type JobProps = {
    data: JobType;
    pressIcon?: () => void;
    pressTitle?: () => void;
    pressLocation?: () => void;
    style?: StyleProp<ViewStyle>;
    pressTag?: () => void;
};
