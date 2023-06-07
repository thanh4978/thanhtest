import { View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { InputCustom, Job } from '@/components/customs';
import useStyles from './styles';
import { FilterIcon, SearchIcon } from '@/assets';
import { JobRecommendation, routes } from '@/constants';
import { FlatList } from 'react-native';
import { NavigationService } from '@/navigation/NavigationService';

const Found: FunctionComponent = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            {/* Job Bookmark */}
            <FlatList
                data={JobRecommendation}
                renderItem={({ item }) => (
                    <Job
                        data={item}
                        pressTitle={() =>
                            NavigationService.navigate(routes.JOB_DETAIL, {
                                data: item,
                            })
                        }
                        pressIcon={() => console.log(item._id)}
                    />
                )}
                keyExtractor={(item) => item._id.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.containerBookmarkJob}
            />
        </View>
    );
};

export default Found;
