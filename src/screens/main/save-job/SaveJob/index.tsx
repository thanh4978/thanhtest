import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { Headers } from '@/components/customs';
import { EllipsisIcon, ReactNativeIcon } from '@/assets';
import SearchJob from '../SearchJob';

const SaveJob: React.FunctionComponent = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Headers
                title="Save Jobs"
                leftIcon={<ReactNativeIcon />}
                titleStyle={styles.title}
                rightIcon={<EllipsisIcon />}
                style={styles.header}
            />
            <SearchJob />
        </View>
    );
};

export default SaveJob;
