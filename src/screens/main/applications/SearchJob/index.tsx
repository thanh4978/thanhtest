import { View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { InputCustom, Job } from '@/components/customs';
import useStyles from './styles';
import { FilterIcon, SearchIcon } from '@/assets';
import { JobRecommendation, routes } from '@/constants';
import { FlatList } from 'react-native';
import { NavigationService } from '@/navigation/NavigationService';
import JobStatus from '../JobStatus';

const SearchJob: FunctionComponent = () => {
    const styles = useStyles();
    const [value, setValue] = React.useState<string>('');
    return (
        <View style={styles.container}>
            {/* Search bar */}
            <InputCustom
                placeholder="Search"
                value={value}
                onChangeText={setValue}
                leftIcon={<SearchIcon />}
                rightIcon={<FilterIcon />}
            />

            {/* Job Application */}
            <FlatList
                data={JobRecommendation}
                renderItem={({ item }) => <JobStatus data={item} />}
                keyExtractor={(item) => item._id.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.containerApplicationJob}
            />
        </View>
    );
};

export default SearchJob;
