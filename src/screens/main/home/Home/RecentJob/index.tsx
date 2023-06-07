import { TouchableOpacity, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import { Job, StyledText } from '@/components/customs';
import useStyles from './styles';
import { CATEGORY_TABS, JobRecommendation, routes } from '@/constants';
import { FlatList } from 'react-native';
import { NavigationService } from '@/navigation/NavigationService';

type RecentJobProps = {
    scrollToTop?: () => void;
};

const RecentJob: FunctionComponent<RecentJobProps> = (props) => {
    const styles = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);
    React.useEffect(() => {
        return () => {};
    }, [selectedTab]);
    const _renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedTab(index)}
                style={[
                    styles.recentContainerStyle,
                    selectedTab === index
                        ? styles.recentContainerFocus
                        : styles.recentContainerUnFocus,
                ]}
            >
                <StyledText
                    style={[
                        styles.recentTitleStyle,
                        selectedTab === index
                            ? styles.recentTitleFocus
                            : styles.recentTitleUnFocus,
                    ]}
                >
                    {item.title}
                </StyledText>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            {/* Recent Job */}
            <View style={styles.titleContainer}>
                <StyledText fontWeight="bold" style={styles.titleStyle}>
                    Recent Jobs
                </StyledText>
                <TouchableOpacity onPress={props.scrollToTop}>
                    <StyledText fontWeight="bold" style={styles.seeAllTitle}>
                        See all
                    </StyledText>
                </TouchableOpacity>
            </View>

            {/* Category */}
            <View>
                <FlatList
                    data={CATEGORY_TABS}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.containerList}
                />
            </View>

            {/* Recent Jobs Flatlist*/}
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
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                    scrollEnabled={false}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                    contentContainerStyle={styles.containerRecommenJob}
                />
            </View>
        </View>
    );
};

export default RecentJob;
