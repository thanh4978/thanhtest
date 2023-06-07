import { View } from 'react-native';
import React, { FunctionComponent } from 'react';
import useStyles from './styles';
import { Job, StyledText } from '@/components/customs';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { JobRecommendation, routes } from '@/constants';
import { NavigationService } from '@/navigation/NavigationService';

const Recommendation: FunctionComponent = () => {
    const styles = useStyles();
    return (
        <View>
            {/* Recommendation */}
            <View style={styles.titleContainer}>
                <StyledText fontWeight="bold" style={styles.titleStyle}>
                    Recommendation
                </StyledText>
                <TouchableOpacity onPress={() => console.log('press see all')}>
                    <StyledText fontWeight="bold" style={styles.seeAllTitle}>
                        See all
                    </StyledText>
                </TouchableOpacity>
            </View>

            {/* Recommendation Flatlist*/}
            <View>
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
                        />
                    )}
                    keyExtractor={(item) => item._id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                    contentContainerStyle={styles.containerRecommenJob}
                />
            </View>
        </View>
    );
};

export default Recommendation;
