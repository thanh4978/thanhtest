import { FlatList, TouchableOpacity, View } from 'react-native';
import React, { FunctionComponent } from 'react';
import useStyles from './styles';
import { StyledText } from '@/components/customs';
import { DetailJobList } from '@/constants/detailJob.constant';
import InfoDetail from '../InfoDetail';

const TabDetail: FunctionComponent = () => {
    const styles = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);
    const _renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedTab(index)}
                style={[
                    styles.detailContainer,
                    selectedTab === index
                        ? styles.detailContainerFocus
                        : styles.detailContainerUnFocus,
                ]}
            >
                <StyledText
                    style={[
                        styles.detailTitleStyle,
                        selectedTab === index
                            ? styles.detailTitleStyleFocus
                            : styles.detailTitleStyleUnFocus,
                    ]}
                >
                    {item.title}
                </StyledText>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            {/* List Info */}
            <FlatList
                data={DetailJobList}
                renderItem={_renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerList}
            />

            {/* Detail of every Infor*/}
            <InfoDetail selectab={selectedTab} />
        </View>
    );
};

export default TabDetail;
