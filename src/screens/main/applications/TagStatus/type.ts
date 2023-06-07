import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export enum TagStatusValues {
    PENDING = 'PENDING',
    SENT = 'SENT',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
}

export type TagStatusProps = {
    data: TagStatusValues;
};
