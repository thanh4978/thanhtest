import React, { FunctionComponent } from 'react';

import { View } from 'react-native';

import { Headers } from '@/components/customs';
import { EllipsisIcon, ReactNativeIcon } from '@/assets';
import useStyles from './styles';
import SearchJob from '../SearchJob';

const Applications: FunctionComponent = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Headers
                title="Applications"
                leftIcon={<ReactNativeIcon />}
                titleStyle={styles.title}
                rightIcon={<EllipsisIcon />}
                style={styles.header}
            />
            <SearchJob />
        </View>
    );
};

export default Applications;
