import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StyledText } from '@/components/customs';
import useStyles from './styles';
import { NOTIFICATION_TABS } from '@/constants';

const TabNotification = () => {
    const styles = useStyles();
    const [selected, setSelected] = React.useState(0);
    const [data, setData] = React.useState(0);
    React.useEffect(() => {
        if (selected === 0) {
            setData(1);
        } else {
            setData(2);
        }
    }, [selected]);

    const Tab = ({ item, index }: any) => {
        const onPressTab = (index: number) => {
            setSelected(index);
        };
        return (
            <TouchableOpacity
                style={[
                    styles.titleWrapper,
                    selected === index ? styles.focusTab : styles.unFocusTab,
                ]}
                onPress={() => onPressTab(index)}
            >
                <StyledText
                    style={[
                        styles.titleStyle,
                        selected === index
                            ? styles.focusTitle
                            : styles.unFocusTitle,
                    ]}
                >
                    {item.title}
                </StyledText>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                {NOTIFICATION_TABS.map((item, index) => {
                    return <Tab item={item} key={index} index={index} />;
                })}
            </View>

            <View>
                <StyledText>{data}</StyledText>
            </View>
        </View>
    );
};

export default TabNotification;
